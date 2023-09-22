import React from "react";
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from "./home";
import Bollywood from "./bollywood";
import Technology from "./technology";
import Fitness from "./fitness";
import Food from "./food";
import Linkcompo from "./linkcompo";
import './style.css'
    

function Routescompo(){
    return(
        <>
        
        <div className="text"> <span className="rotate">The</span>Siren</div>
        <div className="nav_div">
            <BrowserRouter>
            <Linkcompo/>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/bollywood" element={<Bollywood/>}/>
            <Route path="/technology" element={<Technology/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/food" element={<Food/>}/>
           </Routes>
            </BrowserRouter>
          
        </div>
        </>

     
    );

}

export default Routescompo;