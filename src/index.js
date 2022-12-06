import ReactDOM from 'react-dom';
import About from './components/About';
import Footer from './components/Footer';
import Masthead from './components/Masthead';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import './styles.css'

ReactDOM.createRoot(document.getElementById('Root')).render(

    <>
    <Navbar/>
    <Masthead/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
    <Copyright/>
    </>
)