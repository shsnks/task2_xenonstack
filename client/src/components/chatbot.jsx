import React from "react";
import "../styles/chatbot.css";
import {useNavigate} from "react-router-dom";

function Chatbot(){

    let navigate = useNavigate();

    function handleChatbot(){
        navigate("/chatbot");
    }

    return(
        <button className="chatbot-btn" onClick={handleChatbot} title="ChatBot">
        <div className="chatbot-section" title="ChatBot">
        <img className="chatbot-img" src="media/8.png" alt="chatboticon" title="ChatBot"></img>
        </div>
        </button>
    );
}

export default Chatbot;