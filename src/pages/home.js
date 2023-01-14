import React from "react";
import axios from "axios";
import { useState } from "react";
import backend from "./api/backend";
import Sidebar from "./components/sidebar";
import {motion} from "framer-motion";

import { Body } from "./components/styledComponents";
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
        <Body>
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            transition={{delay: 0.25, duration: 1.0}}>
        <br/><br/>
        <div className="card1">
            <form onSubmit={formHandle} className="formik">
                <label className="label">Type any sentence</label>
                <textarea name="sentence" className="inputbox" rows={5} ></textarea>
                <button className="button" type="submit">Submit</button>
            </form>
            <p className="messageIO">&nbsp;{message}&nbsp;</p>
            </div>
            </motion.div>
        </Body>
        </>
    );
    }

export default Home;