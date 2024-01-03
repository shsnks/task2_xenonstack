import React from "react";
import "../styles/services.css";

function Services(){
    return(
        <div className="service-section">
        <h1 className="section-heading">What we provide</h1>

        <div className="service-grid">

        <div className="service-card">
        <img className="service-image" alt="Cyber Security" src="media/1.png"></img>
        <a className="service-link"  href="/cybersecurity"><h2 className="service-name">Cyber Security</h2></a>
        </div>

        <div className="service-card">
        <img className="service-image" alt="Internet Services" src="media/3.png"></img>
        <a className="service-link" href="internetservices"><h2 className="service-name">Internet Services</h2></a>
        </div>

        <div className="service-card">
        <img className="service-image" alt="Tech Products" src="media/4.png"></img>
        <a className="service-link" href="ourproducts"><h2 className="service-name">Our Products</h2></a>
        </div>

        </div>
        </div>
    );
}

export default Services;