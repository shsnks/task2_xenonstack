import React from "react";
import "../styles/stats.css";

function Stats(){
    return(
        <div class="stats-section">
        <h1 className="section-title">Our Numbers</h1>
        <div className="stats-div">

        <div className="stats-card">
        <h2 className="stats-name">1200+ <h2 className="stats-tagline">Active Clients</h2></h2>
        </div>

        <div className="stats-card">
        <h2 className="stats-name">10,000+ <h2 className="stats-tagline">projects</h2></h2>
        </div>

        <div className="stats-card">
        <h2 className="stats-name">20,000+ <h2 className="stats-tagline">bugs resolved</h2></h2>
        </div>

        </div>
        </div>
        
    );
}

export default Stats;