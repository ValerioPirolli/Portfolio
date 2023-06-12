import './App.css'
import Navbar from './components/Navbar'
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';
import Home from './components/Home';
import About from './components/About';
import { useState } from 'react'

setupIonicReact();
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
    </>
  )
}

export default App
