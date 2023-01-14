import React from "react";
import axios from "axios";
import { useState } from "react";
import backend from "./api/backend";
import Sidebar from "./components/sidebar";
import SEO from "./components/SEO";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const formHandle = async (e) => {
        e.preventDefault();
        
            await axios.post(backend+"login",
            { email:e.target.email.value,
              password:e.target.password.value },{ withCredentials: true }
            )
            .then((res) => {
                console.log(res.data);
                setMessage(res.data.message);
                setTimeout(() => { setMessage(""); }, 3000)
                navigate('/success');
            }
            )
            .catch((err) => {
                console.log(err);
                setMessage("Something went wrong");
                setTimeout(() => { setMessage(""); }, 3000)
                
            }
            );
/*
        else{
            setMessage("Please enter your credentials");
            setTimeout(() => { setMessage(""); }, 1000);

        }
*/
        //e.target.reset();

    }
    return (
        <>
        <SEO/>
        <Sidebar/>
        <div className="Body">
            
        <div className="card1 login">
            
            <form onSubmit={formHandle} className="formik">
                <label className="label">Type email</label>
                <input className="inputbox" name="email" type="text" placeholder="admin@test.com" />
                <br/>
                <label className="label">Type password</label>
                <input className="inputbox" name="password" type="password" placeholder="********" />
                <br/>
                <button className="button" type="submit">Login</button>
            </form>
            </div>
            <p>&nbsp;{message}&nbsp;</p>
        </div>
        </>
    );
    }

export default Login;