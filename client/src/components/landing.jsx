import React from "react";
import '../styles/landing.css';

function Landing(props){

    return(
        <div className="landing-section">
        <div className="tagline-box">
        <h1 className="tagline-title">{props.data.title}</h1>
        <p className="tagline-para">{props.data.para}</p>
        </div>
        <div className="illustration-box">
        <img className="landing-illustration" src={props.data.img} alt={props.data.alt}></img>
        </div>
        </div>
    );
}

export default Landing;