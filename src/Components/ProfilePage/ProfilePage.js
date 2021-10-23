import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Intro } from '../Intro/Intro';
import {Projects} from '../Projects/Projects';
import onlineIcon from '../../Icons/onlineIcon.png';
/* import Footer from '../Footer/Footer'; */
import './ProfilePage.css';

export function ProfilePage(prop){
    const [style, setStyle ]= useState({
        bgColor: 'blue',
        color: 'black'
    })

    const [isNight, setIsNight]= useState(false);
    useEffect(()=>{
        isNight? (
            setStyle({
                bgColor: '#2d2d2e',
                bgColor2: "black", 
                bgColor3: "grey",
                bgColor4: "linear-gradient(#2d2d2e, black, black, black, black, #2d2d2e)",
                color: 'lightgrey',
                color2: 'grey'})
            )
             : 
            (
            setStyle({
                bgColor: 'gold',
                bgColor2: 'whitesmoke',
                bgColor3: 'white',
                bgColor4: '#f2f2f5',
                color: 'darkGreen',
                color2: 'grey'})
            )
            ;
        console.log(isNight)
    }, [isNight])

    
    const imageIconSrcs= {
        logo: "**",
        isNightIcon: null,
        menu: null,
        isOnlineIcon: onlineIcon
    }

    function handleModeToggle(){
        isNight? setIsNight(false) : setIsNight(true);
    }

    return (
        <div className="profile-page">
            <Header style={style} onNight={handleModeToggle} isNight={isNight} imgSrcs={imageIconSrcs} />
            <Intro style={style} />
            <Projects style={style} />
            {/*<Footer />*/}
        </div>
    )
}