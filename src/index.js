import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import { Run } from './pages/api/backend';
import { BrowserRouter,Route,Routes } from "react-router-dom";


// routes and pages
import App          from './pages/App';
import Signup       from "./pages/signup";
import Login        from "./pages/login";
import Success      from "./pages/success";
import Home         from "./pages/home";
import RecordedData from "./pages/recordeddata";
import About        from "./pages/about";
import NotFound     from "./pages/notFound";
import Docs         from "./pages/docs";
import Test         from './pages/Test';
// routes and pages

// styles and components
import './index.css';
import './styles/App.css';
import SEO from './pages/components/SEO';
import 'bootstrap/dist/css/bootstrap.min.css';
// styles and components

//import localStorage from "localstorage";
axios.defaults.withCredentials = true;
Run();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <BrowserRouter>
  <SEO/>
    <Routes>
      <Route path="/"            element={<App />} />
      <Route path="signup"       element={<Signup />} />
      <Route path="login"        element={<Login />} />
      <Route path="success"      element={<Success />} />
      <Route path="recordeddata" element={<RecordedData />} />
      <Route path="home"         element={<Home />} />
      <Route path="about"        element={<About />} />
      <Route path="Test"         element={<Test />} />
      <Route path="docs"         element={<Docs />} />
      <Route path="*"            element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

