import React from 'react';
import './Project.css';


export function Project({name, tech, language}){


    return (
        <div className="project">
            <div className="image-space">
                <h3>{name}</h3>
            </div>
            <p>{tech[0]} and {tech[1]}</p>
            <p>{language[1]}</p>
        </div>
    )
}