import { useState } from 'react'
import {RecoilRoot} from "recoil"
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import CreateRide from './pages/CreateRide'
import PageLoader from './pages/PageLoader'
import Profile from './pages/Profile'
import { CallbackPage } from './pages/Callback'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const [count, setCount] = useState(0);
  const {isLoading,user} = useAuth0();

  if(isLoading){
    return(
      <div>
        <PageLoader />
      </div>
    )
  }
  // console.log(user);

  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create-ride' element={<CreateRide/>} />
          <Route path='/callback' element={<CallbackPage/>} />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </RecoilRoot>
    </>
  )
}

export default App
