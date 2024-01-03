import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/events.css";

function Events(){

    let navigate = useNavigate();

    function handleEventsButton(){
        const EMAIL = document.cookie
    .split('; ')
    .find((row) => row.startsWith('email='))
    ?.split('=')[1];

    if(EMAIL === "" || EMAIL === undefined){
        alert('Email not found. Please register or login');
        navigate("/signin");
    }else{
        alert('You will soon receive events information in your mail inbox.');
    }

    }  


    return(
        <div><h1 className="events-section-title">Upcoming Events</h1>
        <div className="events-content-section">

        <div className="event-img-div">
        <img className="event-img" alt="EventsImage" src="media/7.png"></img>
        </div>

        <div className="event-para-div">
        <p className="event-para">We conduct lots of awareness workshops and events on recent developments in world of cyber security.</p>
        <button className="event-btn" onClick={handleEventsButton}>Click to get notified</button>
        </div>

        </div>
        </div>
    );
}

export default Events;