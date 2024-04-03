import { useState } from 'react'
import './App.css'
import {RecoilRoot} from "recoil"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>

    </>
  )
}

export default App
