
import './App.scss'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skill from './components/Skill'

function App() {

  return (
    <>
      <Navbar/>
      <main>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      </main>
    </>
  )
}

export default App
