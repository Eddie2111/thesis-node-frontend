import React from "react";
import axios from "axios";
import backend from "./api/backend";
import ResponsiveAppBar from "./components/Navbar";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
const Success = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(backend+"success", { withCredentials: true })
            .then((res) => {
                //console.log(res.data.status)
                if(res.data.status==='ok'){
                    
                }
                if(res.data.status!=='ok'){
                    navigate('/login');
                }
            })
            .catch((err) => {
                navigate('/login');
                console.log(err.message);
            })
        }, 3000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div>
            <ResponsiveAppBar/>
            <h1>Success</h1>
        </div>
    );
    }

export default Success;