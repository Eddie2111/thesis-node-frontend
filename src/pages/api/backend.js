import axios from "axios";

//const backend = "http://localhost:3200/";
const backend = "https://bdslp.onrender.com/";

export const Run = async()=>{
    await axios.get(backend,{withCredentials: true})
}

export default backend;