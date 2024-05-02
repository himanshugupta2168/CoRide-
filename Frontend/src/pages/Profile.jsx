import React from 'react'
import Navbar from "../components/Navbar"
import { useAuth0 } from '@auth0/auth0-react'
function Profile() {
  const {user}= useAuth0();
  console.log(user);
  return (
    <>
      <Navbar/>
      <div className='flex flex-col mt-6 w-11/12 mx-auto md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img src={user.picture} alt="" className='mx-auto md:mx-0 mt-6 rounded-full' />
          <p className='mt-4 text-center md:text-left mx-6 font-semibold'>{user.nickname}</p>
        </div>
        {/* details */}
        <div className=' md: mt-10 text-pretty md:text-left '>
          <p className=''>Name: <span>{user.nickname}</span></p>
          <p>Email Address: <span>{user.email}</span> {user.email_verified?"verified":"Unverified"}</p>
          <p>Joined On: <span>{user.updated_at.split('T')[0]}</span></p>
        </div>
      </div>
    </>
  )
}

export default Profile