import React, { useEffect, useState } from 'react';
import './Header.css';
/* imageIconSrcs will be an object that contains the logo, isNight/isDay icon, isOnline icon, menu icon */


function Header({ style, switchMode, isNight }){
    const [isNightModeText, setIsNightModeText]= useState("Dark mode")
    useEffect(()=>{
        isNight? setIsNightModeText("Light mode"): setIsNightModeText("Dark mode");
    },[isNight])
        
    

    return (
        <div className="header" style={{background: style.bgColorHeader, color: style.colorHeader}} >
            <h1 className="logo">Victor.eth</h1>
            <p className="light-switch" onClick={switchMode}> {isNightModeText} </p>
        </div>
    )

}

export default Header;