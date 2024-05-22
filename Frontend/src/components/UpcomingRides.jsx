import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';

function UpcomingRides() {
  // const {user}= useAuth0();
  //   useEffect(()=>{
  //       const findPassengerRequests= async()=>{
  //          const {data}= await axios.get(`${import.meta.env.VITE_BACKEND_URL}/rides/fetchRequests/?email=${user.email}`);
  //          console.log(data);
  //       }
  //       findPassengerRequests();
  //   }, [user])
  //   console.log(user);
  return (
    <div>Upcoming rides</div>
  )
}

export default UpcomingRides