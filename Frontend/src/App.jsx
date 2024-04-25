import { useState } from 'react'
import './App.css'
import {RecoilRoot} from "recoil"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import CreateRide from './pages/CreateRide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create-ride' element={<CreateRide/>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>

    </>
  )
}

export default App
