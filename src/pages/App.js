import logo from '../assets/TwoPersonButton.svg';
import '../styles/App.css';
import Sidebar from "./components/sidebar";
import {motion} from "framer-motion";
import SEO from './components/SEO';

function App() {
    const subtitle = {
        color: "white",
        fontSize: "1.3rem",   
    }


  return (
    <>
    <SEO />
    <Sidebar/>
    
      <div className="Body">
        <div className="test">
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 1.5}}>
                <img src={logo} className="App-logo1" alt="logo" />
            
        </motion.div>

        </div>
        <div className="test box11">
        
            <motion.div 
                initial={{opacity: 0, x: 200}} 
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.5, duration: 1.5}}>
            <div>
                    <p className="headLine">
                        Bangla Sign Language Development Project 
                    </p>
                    <p style={subtitle}> Help us develop Bengali sign language transformation and help the journey of millions overcoming their language barrier</p>
                </div>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 200}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 2, duration: 1.5}}>
                <a href="/home">
                    <button className="buttonStarted">Get Started</button>
                </a>
            </motion.div>
        
        </div>
      </div>
    
    </>
  );
}

export default App;
