import './App.css'
import Navbar from './components/Navbar'
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';
import Home from './components/Home';

setupIonicReact();
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
