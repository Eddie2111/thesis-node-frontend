import React from "react";
import axios from "axios";
import { useState } from "react";
import backend from "./api/backend";
import Sidebar from "./components/sidebar";
import {motion} from "framer-motion";

const Home = () => {
    const [message, setMessage] = useState("");
    
    const formHandle = async (e) => {
        e.preventDefault();
        if(e.target.sentence.value !== ""){
            await axios.post(backend+"recieve", 
            { sentence:e.target.sentence.value },
            )
            .then((res) => {
                //console.log(res.data.data);
                setMessage(res.data.data);
                setTimeout(() => { setMessage(""); }, 3000)
                
            }
            )
            .catch((err) => {
                //console.log(err);
                
                setTimeout(() => { setMessage(""); }, 3000)
            }
            );
        }
        else{
            setMessage("Please enter a sentence");
            setTimeout(() => { setMessage(""); }, 3000)
        }
        e.target.reset();

    }
    return (
        <>
        
        <Sidebar/>
        <div className="Body">
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            transition={{delay: 0.25, duration: 1.0}}>
        <br/><br/>
        <div className="card1">
            <form onSubmit={formHandle}>
                <label className="label">Type any bengali sentence</label>
                <textarea name="sentence" className="inputbox" rows={5} ></textarea>
                <button className="button" type="submit">Submit</button>
            </form>
            </div>
            </motion.div>
            <p className="messageIO">&nbsp;{message}&nbsp;</p>
        </div>
        </>
    );
    }

export default Home;
