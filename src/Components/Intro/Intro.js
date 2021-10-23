import { useState, useEffect }from  'react';
import './Intro.css';
export function Intro({ style }){
    const [counter, setCounter]= useState(0)
    const [title, setTitle]= useState("Data analyst");
    
    
    useEffect(()=>{
        const titles= ["Artist", "Music Lover", "I love the Data!"];
        const clear= setInterval(()=>{
            setCounter(curr=> curr< (titles.length -1)? curr+ 1: curr- (titles.length -1))
        }, 5000);

        return ()=>{clearInterval(clear)};
    }, [])

    useEffect(()=>{
        const titles= ["Artist", "Music Lover", "I love Data!"];
        setTitle(titles[counter]);
        console.log(counter)

    },[counter])

    //Nightmode toggle Styles :mobile
    const introDivStyle= {
        background: style.bgColor4,
        color: style.color,
    };


    const anchor= document.getElementById("projects-container");
    const onClick= ()=>{
        anchor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }
    return(
        <div className="intro" style={introDivStyle}>
            <h1 className="greet col-1 row-1">Hello <br/> My name is</h1>
            <h1 className="name">{"<VICTOR />"}</h1>
            <p className="job">Full-stack software developer <br/><span id="and"> & <br/> {title}</span> </p>
            <br/>
            <p className="about about-text">Victor enjoys building rich software with an optimised back-end and an elegant front-end. <br/> He speaks Javascript and English.</p>
            <p onClick={onClick} className="scroll">Projects</p>
        </div>
    )
}