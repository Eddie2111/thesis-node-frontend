import React from "react";
import axios from "axios";
import { useState } from "react";
import backend from "./api/backend";
import Sidebar from "./components/sidebar";
import {motion} from "framer-motion";

const Home = () => {
    const [message, setMessage] = useState("");
    const clearMsg = setTimeout(() => { setMessage(""); }, 3000);
    const formHandle = async (e) => {
        e.preventDefault();
        if(e.target.sentence.value !== ""){
            await axios.post(backend+"recieve", 
            { sentence:e.target.sentence.value },
            )
            .then((res) => {
                console.log(res.data.data);
                setMessage(res.data.data);
                clearMsg();
            }
            )
            .catch((err) => {
                console.log(err);
                setMessage("failed to connect to server");
                clearMsg();
            }
            );
        }
        else{
            setMessage("Please enter a sentence");
            clearMsg();
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
        <div className="card">
            <form onSubmit={formHandle}>
                <label>Type any sentence</label>
                <input className="inputbox" name="sentence" type="text" placeholder="যে কোন বাংলা বাক্য" />
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