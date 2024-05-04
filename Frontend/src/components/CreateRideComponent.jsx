/* eslint-disable react/prop-types */
import Calender from './Calender';
import { InlineIcon } from '@iconify/react';
import { CitySearch,PassengerCount } from './TripInputs';
import { useAuth0 } from '@auth0/auth0-react';



export default function CreateRideComponent(){
    const{ isAuthenticated,loginWithPopup,user } = useAuth0();
    const publishRideHandler = async()=>{
        if(!isAuthenticated){
            await loginWithPopup();
        }else{
            // console.log(user);
            
        }
    }
    return(
        <div className='relative'>
            <div className="rounded-lg bg-white shadow-md">
                <PublishRideInputs/>
                <div>
                    <button className='bg-green-500 w-full py-3 px-4 rounded-b-lg text-xl hover:bg-green-600 font-semibold' type='button' onClick={publishRideHandler}>Publish ride</button>
                </div>
            </div>
        </div>
    )

}

function TimePicker({title}){
    return(
        <div className='grow my-2'>
            <label htmlFor={title.split(" ")[0]} className='text-slate-600'>{title}</label>
                <div>
                    <div className="w- relative flex">
                        <input type="time" id={title.split(" ")[0]} className="w-full text-lg rounded-md hover:bg-slate-100 mt-2 p-1" required />
                    </div>
                </div>
        </div>
    )
}

function PublishRideInputs(){
    return(
        <div className='flex flex-col p-4 px-2 mx-2 divide-y divide-slate-700 '>
            <CitySearch placeholder={"Leaving from"}/>
            <CitySearch placeholder={"Going to"}/>
            <div className='flex gap-4 px-3'>
                <TimePicker title={"Departure time"} />
                <TimePicker title={"Arrival time"} />
            </div>
            <div>
                <Calender/>
            </div>
            
            <div>
                <PassengerCount title={"seat available"}/>
            </div>
            <div className='relative py-2'>
                <div className='relative'>
                    <div className='absolute left-0 flex h-full justify-center items-center pl-2 text-lg'>
                        <label htmlFor="fare">
                            <InlineIcon icon={"fluent:currency-dollar-rupee-24-regular"} >{' '}</InlineIcon>
                        </label>
                    </div>
                    <input type="number" name="fare" id="fare" className='pl-[28px] py-2 p-1 rounded-md w-full text-md hover:bg-slate-100 font-bold'/>
                </div>
            </div>
        </div>
    )
}