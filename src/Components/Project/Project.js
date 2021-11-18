import React from 'react';
import './Project.css';


export function Project({name, tech, language, style}){

    

    return (
        <div className="project">
            <div className="image-space">
                <h3 className="p-name">{name}</h3>
            </div>
            <p className="tech-stack">{tech[0]} and {tech[1]}</p>
            <p className="language">{language[1]}</p>
        </div>
    )
}