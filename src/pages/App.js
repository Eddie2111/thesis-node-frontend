import logo from '../assets/TwoPersonButton.svg';
import Sidebar from "./components/sidebar";
import {motion} from "framer-motion";
import SEO from './components/SEO';
import { Body, ButtonStarted, Test } from './components/styledComponents';
function App() {

    const subtitle = {
        color: "white",
        fontSize: "1.3rem",   
    }

  return (
    <>
    <SEO title="home" value={1}/>
    <Sidebar/>
    
      <Body>
        <Test>
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 1.5}}>
                <img src={logo} className="App-logo1" alt="logo" />
            
        </motion.div>

        </Test>
        <Test className="box11">
        
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
                    <ButtonStarted>Get Started</ButtonStarted>
                </a>
            </motion.div>
        
        </Test>
      </Body>
    
    </>
  );
}

export default App;
