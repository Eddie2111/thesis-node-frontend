import React from "react";
import axios from "axios";
//import { useState } from "react";
import Sidebar from "./components/sidebar";
const Test = () => {
    //const [bar,setBar] = useState("0px");
    const onClick = async() => {
        await axios.post("http://localhost:3200/test", { bar:"at data" })
        .then((res) => {
            console.log(res.data);
            //setBar(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
        <Sidebar/>
        <div className="Body">

            <div className="card">
                <div className="side">
                    test
                    <button onClick={onClick}>test!</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Test;