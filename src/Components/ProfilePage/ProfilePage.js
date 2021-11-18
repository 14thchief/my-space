import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Intro } from '../Intro/Intro';
import {Projects} from '../Projects/Projects';
/* import Footer from '../Footer/Footer'; */
import './ProfilePage.css';

export function ProfilePage(prop){
    const [style, setStyle ]= useState({})

    const [isNight, setIsNight]= useState(false);
    useEffect(()=>{
        isNight? (
            setStyle({
                //background-colors
                bgColorHeader: '#2B2B2B',
                bgColorIntro: "#2A2A2A",
                bgColorTextBox: "#1D1D1D",
                textShadowColor: "grey",
                bgColorProjects: "#424242",
                bgColorProjectbox1: "#B4C7AA",
                bgColorProjectbox2: '#E70C41',
                //Font-colors
                colorHeader: '#F9F8F8',
                colorIntro1: "#EFF9EF",
                colorIntro2: "#939393",
                colorIntro3: '#EDEBEB',
                colorIntro4: '#2B3326',
                colorIntro5: '#6B8260',
                colorProjects: "#EDEBEB",
                colorProject1: "#F9F8F8",
                colorProject2: ""})
            )
             : 
            (
            setStyle({
                //backgrounds
                bgColorHeader: '#E70C41',
                bgColorIntro: '#F9F8F8',
                bgColorTextBox: "rgb(255, 255, 255)",
                textShadowColor: "grey",
                bgColorProjects: '#EDEBEB',
                bgColorProject1: '#E70C41',
                bgColorProject2: "#9821A7",
                //Font-colors
                colorHeader: "#FFFFFF",
                colorIntro1: '#236770',
                colorIntro2: '#A6A6A6',
                colorIntro3: '#696969',
                colorIntro4: '#424242',
                colorIntro5: '#505E49',
                colorProjects: "#2B3326",
                colorProject1: "#2B3326",
                colorProject2: ""})
            )
    }, [isNight])

    function handleIsNightToggle(){
        isNight? setIsNight(false) : setIsNight(true);
    }

    return (
        <div className="profile-page">
            <Header style={style} switchMode={handleIsNightToggle} isNight={isNight} />
            <Intro style={style} />
            <Projects style={style} />
            {/*<Footer />*/}
        </div>
    )
}