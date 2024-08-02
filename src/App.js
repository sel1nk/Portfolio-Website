import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import { Ban } from 'react-bootstrap-icons';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Footer} from './components/Footer';
import { Experience } from './components/Experience';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
