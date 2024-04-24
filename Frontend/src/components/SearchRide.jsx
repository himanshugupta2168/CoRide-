import React, { useState } from 'react';
import { MdOutlineCircle } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';
import { SlCalender } from "react-icons/sl";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchInput({ start, ride, setRide }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRide({
      ...ride,
      [name]: value,
    });
  };

  return (
    <div className='flex w-[25%] h-full items-center gap-2 py-2 text-white'>
      <MdOutlineCircle className='' />
      <input
        type="text"
        placeholder={`${start ? 'Origin' : 'Destination'}`}
        name={start ? 'startPoint' : 'endPoint'}
        className='w-full h-full outline-none bg-transparent rounded-md px-4 text-md text-white placeholder-white'
        onChange={handleChange}
      />
      <div className='w-1 h-full bg-green-600 rounded-lg'></div>
    </div>
  );
}

function SearchRide() {
  const [ride, setRide] = useState({
    startPoint: '',
    endPoint: '',
    date: new Date(),
    passengers: 1,
  });
  const [updatePassenger, setUpdatePassenger]= useState(false);

  return (
    <div className='hidden md:flex w-full bg-green-400 h-[200px]  items-center text-white relative'>
      <div className='flex w-[90vw] px-4 mx-auto border border-green-600 h-[60px] m-4 items-center rounded-lg gap-4 '>
        <SearchInput start={true} setRide={setRide} ride={ride} />
        <SearchInput start={false} setRide={setRide} ride={ride} />
        <div className='w-[25%] h-full flex items-center gap-2 py-2'>
          <SlCalender />
          <DatePicker
            selected={ride.date}
            onChange={(date) => setRide({ ...ride, date })}
            className='bg-transparent w-64 h-10 outline-none rounded-md px-4'
          />
          <div className='w-1 h-full bg-slate-400 rounded-lg'></div>
        </div>
        <div className='w-[25%] h-full flex items-center gap-2 py-2' onClick={(e)=>{setUpdatePassenger(!updatePassenger)}}>
          <IoPersonOutline />
          <p className='font-semibold' >{ride.passengers} passengers</p>
        </div>
        <div className=' px-6 py-2 bg-black rounded-lg '>Search</div>
      </div>
      {updatePassenger&& 
          <div className=' absolute right-16 w-[25%] h-[51px] bottom-2  border border-green-600 rounded-md flex px-2 items-center justify-between'>
          <div className='text-lg font-semibold'>Passenger</div>
          <div className="vary flex gap-4 px-4">
            <span className=' w-8 h-8 text-center font-bold  rounded-full text-xl cursor-pointer' onClick={(e)=>{setRide({...ride,passengers:ride.passengers-1})}} > - </span>
            <p>{ride.passengers}</p>
            <span className='w-8 h-8 text-center font-bold  rounded-full text-xl cursor-default' onClick={(e)=>{setRide({...ride, passengers:ride.passengers+1})}}> + </span>
          </div>
        </div>
      }
    </div>
  );
}

export default SearchRide;
