
import styles from './App.module.css'
import { NavBar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import {Skills} from './components/Skills/Skills'
import {Education} from './components/Education/Education'
import {Contact} from './components/Contact/Contact'

function App() {

  return (
    <div className={styles.App}>
     <NavBar/>
     <Hero/>
     <About/>
     <Experience/>
     <Skills/>
     <Education/>
     <Contact/>
    </div>
  )
}

export default App
