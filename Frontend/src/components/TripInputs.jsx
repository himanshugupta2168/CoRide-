import { InlineIcon } from '@iconify/react';
import { useMemo, useState } from 'react';
import Calender from './Calender';


export default function TripInputs(){
    return(
        <div className='relative px-10'>
			<div className='bg-white rounded-lg'>
				<InputFields />
				<button className='bg-green-500 w-full py-3 px-4 rounded-b-lg text-xl hover:bg-green-600'>Search</button>

			</div>
        </div>

    )
}
function InputFields(){
    return(
        <div className='flex flex-col p-4 px-2 mx-2 max-lg:divide-y max-lg:divide-slate-700 lg:flex-row lg:divide-x-2 lg:divide-slate-500'>
            <CitySearch placeholder={"Leaving from"} />
            <CitySearch placeholder={"Going to"} />
			<Calender/>
			<PassengerCount title={"passenger"}/>
        </div>
    )

}
export function CitySearch({placeholder}){
    return(
        <div className='relative grow'>
            <div className='border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-0 py-2 lg:mx-2'>
                <div className='absolute left-0 top-0 bottom-0 p-2'>
                    <div className='flex justify-center flex-col h-full lg:pl-2'>
                        <InlineIcon icon={"fluent:circle-32-regular"} >{' '}</InlineIcon>
                    </div>
                </div>
                <input type="text" name={placeholder.split(" ")[0]} id="" required placeholder={placeholder} className='pl-[28px] py-2 rounded-md hover:bg-slate-100 w-full border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-0' />
            </div>
        </div>
    )
}
export function PassengerCount({title}){
	const [passCount,setPassCount] = useState(1);
	const passenger = useMemo(()=>{
		if (passCount == 1) {
			return title;
		}else{
			const text = title.split(" ");
			const ans = text[0]+"s ";
			text.shift();
			return ans+(text.join(" "));
		}
	},[passCount,title])

	const increaseCheckCount = () =>{
		if(passCount == 6) return;
		setPassCount(()=>passCount+1);
	}
	const decreaseCheckCount = () =>{
		if(passCount==1) return;
		setPassCount(()=>passCount-1);

	}

	return(
		<div className=' py-2 grow'>
			<div className='flex justify-between bg-white px-2 py-1 hover:bg-slate-100 rounded-lg lg:mx-2'>
				<div className='flex gap-3 items-center'>
					<div className='text-3xl'>
						<InlineIcon icon={"fluent:person-28-regular"}>{' '}</InlineIcon>
					</div>
					<span className=''>{passCount} {passenger}</span>
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