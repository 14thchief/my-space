import './Intro.css';

export function Intro({ style }){

    const projectsDiv = document.getElementById("projects-container");
    const onClick= ()=>{
        projectsDiv.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"})
    }

    const introDivStyle= {
        background: style.bgColorIntro, 
        "box-shadow": style.introBoxShadow
    }



    return(
        <div className="intro" style={introDivStyle}>
            <h1 className="greet col-1 row-1" style={{color: style.colorIntro3}}>Hi, I am</h1>
            <div className="name-div" >
                <h1 className="name" style={{color: style.colorIntro1}}>{"< VICTOR />"}</h1>
                <p className="job" style={{color: style.colorIntro2}}>Full-stack software developer </p>
            </div>
            
            <br/>
            <p className="about about-text" style={{background: style.bgColorTextBox, color: style.colorIntro3}}>" He enjoys building web apps with an elegant easy-to-learn UI and a seamless back-end " <br/> - Victor </p>
            <div className="links">
                <p onClick={onClick} className="projects-link" style={{border: style.introButtonBorder}} >PROJECTS </p>
                <p onClick={null} className="cv-link">CONTACT</p>
            </div>
                
        </div>
    )
}