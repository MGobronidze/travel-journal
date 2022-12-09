import React from 'react';
import icon from "./images/globe.png"

export default function Navbar(){
return(
    <div className="navbar--item">
       <div className='globe--box'><img src={icon} className="globe--icon"></img></div> 
        <div className='navbar--box'><h1 className="navbar--title">my travel journal.</h1></div>
    </div>
)
}