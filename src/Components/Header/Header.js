import React, { useEffect, useState } from 'react';
import './Header.css';
/* imageIconSrcs will be an object that contains the logo, isNight/isDay icon, isOnline icon, menu icon */

function Header({ imgSrcs, style, onNight, isNight }){
    const [isNightModeText, setIsNightModeText]= useState("Day mode")
    useEffect(()=>{
        isNight? setIsNightModeText("Day mode"): setIsNightModeText("Night mode");
    },[isNight])
        
    

    return (
        <div className="header" style={{background: style.bgColor, color: style.color}} >
            <h1 className="logo">{imgSrcs.logo}</h1>
            <button  id="nightIcon" onClick={onNight} alt="Night Mode">{isNightModeText}</button>
            <img src={imgSrcs.isOnlineIcon} id="isOnlineIcon" alt="Online" />
            <select> 
                <option>Projects</option>
                <option>Blog</option>
                <option>Contact</option>
            </select>
        </div>
    )

}

export default Header;