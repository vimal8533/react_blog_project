import React from "react";
import { Link } from "react-router-dom";
import './style.css'
function Linkcompo(){
return(
    <div className="link">
        <Link to='/' className="nav_title">Home</Link>
        <Link to='/bollywood' className="nav_title">Bollywood</Link>
        <Link to='/technology' className="nav_title">Technology</Link>
        <Link to='/hollywood' className="nav_title">Hollywood</Link>
        <Link to='/fitness' className="nav_title">Fitness</Link>
        <Link to='/food' className="nav_title">Food</Link>

    </div>

);

}
export default Linkcompo;