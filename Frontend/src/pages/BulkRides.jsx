import React, { useState } from 'react'
import { useEffect, useMemo } from 'react'
import { InlineIcon } from '@iconify/react';
import Navbar from "../components/Navbar"
import Calender from '../components/Calender';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { searchSourceAtom, searchDestAtom, searchDateAtom, searchSeatsAtom } from '../atoms/searchRideAtoms';
import axios from "axios"

function BulkRides() {
    const sourceCity = useRecoilValue(searchSourceAtom)
	const destinationCity = useRecoilValue(searchDestAtom)
	const date = useRecoilValue(searchDateAtom)
	const seats= useRecoilValue(searchSeatsAtom)
    const [updateView, setUpdateView] = useState(true);
    const [rides, setRides]= useState([]);
    let isMobile=undefined;

    useEffect(() => {
        const handleResize = () => {
            isMobile = window.innerWidth <= 1024;
            if (isMobile) {
                setUpdateView(false);
            } else {
                setUpdateView(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const getRideDetails = async()=>{
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/rides/fetch?SC=${sourceCity}&DC=${destinationCity}&date=${date}&seats=${seats}`);
       setRides(response.data.rides);
       if (isMobile){
        setUpdateView(false)
       }
    }


    useEffect(()=>{
        getRideDetails();
    }, [])

  return (
    <div>
        <Navbar/>
        <div onClick={()=>{setUpdateView(!updateView)}} className=" max-w-[570px] mx-auto lg:hidden">
            <div className=' text-center duration-500 ease-in-out'>{updateView ?"Hide Search details" :"Show Search details"} </div>
        </div>
        <div className='relative z-0'>
            {updateView &&(
                <div className=' w-full h-10 lg:sticky lg:top-0 grid grid-cols-1 max-w-[550px] mx-auto lg:min-w-full lg:grid-cols-5 items-center justify-between px-6'>
                    <CitySearch placeholder={"Leaving from"} atomName={searchSourceAtom} />
                    <CitySearch placeholder={"Going to"} atomName={searchDestAtom} />
                    <Calender atomName={searchDateAtom} />
                    <PassengerCount title={"passenger"} atomName={searchSeatsAtom} />
                    <button className=' border py-2 font-semibold bg-[#489d72] rounded-xl' onClick={getRideDetails}>Update Search</button>
                </div>
            )}
             <div className='w-full min-h-screen border mt-10'>
            {
                !rides&&(<div className='flex flex-col items-center justify-center w-full min-h-screen border'>
                    <p className='break-words px-6 py-4'>Ohhh! No rides available for your search  😥😥😥...</p>
                    <p onClick={()=>setUpdateView(!updateView)} className='underline text-blue-500 lg:hidden'>Update search details </p>
                </div>)
            }
            {
                rides && rides.map((ride, i)=>{
                    return <p key={i}>{JSON.stringify(ride)}</p>
                })
            }
        </div>
        </div>
    </div>
  )
}






export function CitySearch({placeholder,atomName}){
	const atomGetter = useRecoilValue(atomName);
	const atomSetter = useSetRecoilState(atomName);
    return(
        <div className='relative grow'>
            <div className='border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-0 py-2 lg:mx-2'>
                <div className='absolute left-0 top-0 bottom-0 p-2'>
                    <div className='flex justify-center flex-col h-full lg:pl-2'>
                        <InlineIcon icon={"fluent:circle-32-regular"} >{' '}</InlineIcon>
                    </div>
                </div>
                <input type="text" value={atomGetter} onChange={(e)=>atomSetter(e.target.value)} name={placeholder.split(" ")[0]} id="" required placeholder={placeholder} className='pl-[28px] py-2 hover:bg-slate-100 w-full border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-0' />
            </div>
        </div>
    )
}
export function PassengerCount({title,atomName}){
	const atomGetter = useRecoilValue(atomName);
	const atomSetter = useSetRecoilState(atomName);

	const passenger = useMemo(()=>{
		if (atomGetter == 1) {
			return title;
		}else{
			const text = title.split(" ");
			const ans = text[0]+"s ";
			text.shift();
			return ans+(text.join(" "));
		}
	},[atomGetter,title])

	const increaseCheckCount = () =>{
		if(atomGetter == 6) return;
		atomSetter(()=>atomGetter+1);
	}
	const decreaseCheckCount = () =>{
		if(atomGetter==1) return;
		atomSetter(()=>atomGetter-1);

	}

	return(
		<div className=' py-2 grow'>
			<div className='flex justify-between bg-white px-2 py-1 hover:bg-slate-100 rounded-lg lg:mx-2'>
				<div className='flex gap-3 items-center'>
					<div className='text-3xl'>
						<InlineIcon icon={"fluent:person-28-regular"}>{' '}</InlineIcon>
					</div>
					<span className=''>{atomGetter} {passenger}</span>
				</div>
				<div className='flex gap-4 text-2xl'>
					<button type='button' onClick={decreaseCheckCount} className='rounded-lg hover:bg-slate-200'>
						<InlineIcon icon={"fluent:subtract-28-filled"}>{' '}</InlineIcon>
					</button>
					<button type='button' onClick={increaseCheckCount} className=' rounded-lg hover:bg-slate-200'>
						<InlineIcon icon={"fluent:add-16-regular"}>{' '}</InlineIcon>
					</button>
				</div>
			</div>
		</div>
	)
}
export default BulkRides