import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>


<Routes>
  <Route path='/a' element={<Add/>}/>
  <Route path='/h' element={<Home/>}/>
</Routes>

     </>
  )
}

export default App
