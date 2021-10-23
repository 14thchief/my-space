import React /*, {useState, useEffect}*/ from 'react';
import {Project} from '../Project/Project';
import './Projects.css';

export function Projects({ style }){

    const projects= [
        {name: "Simple Gists", description: "", link: "https://simplegists.netlify.app", img: "image_url", language: ["Python", "Javacript"], tech: ["NodeJS", "ReactJS"]},
        {name: "project_name", description: "", link: "https://simplegists.netlify.app", img: "image_url", language: ["Python", "Javacript"], tech: ["NodeJS", "ReactJS"]},
        {name: "project_name", description: "", link: "https://simplegists.netlify.app", img: "image_url", language: ["Python", "Javacript"], tech: ["NodeJS", "ReactJS"]},
        {name: "project_name", description: "", link: "https://simplegists.netlify.app", img: "image_url", language: ["Python", "Javacript"], tech: ["NodeJS", "ReactJS"]}
    ]


    const projectContainerStyle={
        background: style.bgColor,
        color: style.color
    }

    return(
        <div id="projects-container" className="projects-container" style={projectContainerStyle}>
            <h1 className="projects-header" style={projectContainerStyle}>Projects</h1>
            {projects.map(({name, description, link, img, language, tech}, i)=>{
               return <Project key={i} className="project" name={name} description={description} link={link} image={img} language={language} tech={tech} />
            })}
        </div>
    )
}