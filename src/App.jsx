
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/navBar';
import Portfolio from './components/Portfolio';
import Skill from './components/skill';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div >
        <NavBar />
        <Home/>
        <About/>
        <Portfolio/>
        <Skill/>
        <Contact/>
        <Footer/>
      </div>
      <Toaster/>
      </>
  )
}

export default App;
