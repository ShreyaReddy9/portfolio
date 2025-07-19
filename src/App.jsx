
import styles from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero';
import {About} from './components/About/About';
import {Experience} from './components/Experience/Experience';
import {Projects} from './components/Projects/Projects';
import {Skills} from './components/Skills/Skills';
import FractalTree from './components/FractalTree/FractalTree';


function App() {
 
  return(
   <div className={styles.App}> <Navbar/>
   <FractalTree/>
   <Hero/>
   <About/>
   <Skills/>
   <Experience/>
   <Projects/>
   
   </div>
  );
}

export default App
