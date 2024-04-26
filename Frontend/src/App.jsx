import { useState } from 'react'
import './App.css'
import {RecoilRoot} from "recoil"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import CreateRide from './pages/CreateRide'
import {Auth0Provider}from "@auth0/auth0-react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Auth0Provider
      domain="dev-gpm4p4d47waw63oc.us.auth0.com"
      clientId="Tz8HtuRV2SoWGg8EzZCjLMv5PSOxBqDb"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/create-ride' element={<CreateRide/>} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </Auth0Provider>
    </>
  )
}

export default App
