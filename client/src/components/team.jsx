import React from "react";
import "../styles/team.css";

function Team(){
    return(
        <div className="team-section">
        <h1 className="team-section-heading">Developer's Team</h1>
        <div className="team-grid">

        <div className="member-card">
        <img className="member-img" src="media/member/2.png" alt="Member Pic"></img>
        <h2 className="member-name">Alex Stark</h2>
        <h3 className="member-desg">Co-Founder | Cyber Security Specialist</h3>
        </div>


        <div className="member-card">
        <img className="member-img" src="media/member/2.png" alt="Member Pic"></img>
        <h2 className="member-name">Jim Wheeler</h2>
        <h3 className="member-desg">CTO | Backend Developer</h3>
        </div>

        </div>
        </div>
    );
}

export default Team;