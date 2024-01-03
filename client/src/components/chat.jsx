import React, {useState} from "react";
import "../styles/chat.css";

function Chat(){

    const [style, setStyle] = useState("hide");
    const [message, setMessage] = useState("");
    const [sentMessage, setSentMessage] = useState("");
    const [msgStyle, setmsgStyle] = useState("msg-bar hide");
    const [welStyle, setwelStyle] = useState("wel-div show");

    function chatBoxClose(){
        if(style === "hide"){
            setStyle("show");
        setwelStyle("wel-div show");
        setmsgStyle("msg-bar hide");
        }
        else if(style === "show"){
            setStyle("hide");
        }
    }

    function sendMessage(){
        setSentMessage(message);
        setMessage("");
        setmsgStyle("msg-bar show");
        setwelStyle("wel-div hide");
    }

    function handleMessageChange(event){
        setMessage(event.target.value);
    }

    function handleSentMessageChange(event){
        setSentMessage(event.target.value);
    }


    return(
        <div className="chat-section">
        <div className="chat-btn-div">
            <button className="chat-btn" onClick={chatBoxClose}>Chat Now</button>
        </div>

        <div className={style} id="chatBox">
        <button className='chat-close-btn' onClick={chatBoxClose}>X</button>
        <div className={welStyle}>
        <p className="wel-text">Hi! I am Swift. I would love to solve your query.</p>
        </div>
        <div id="chatsHere">
        <input className={msgStyle} value={sentMessage} onChange={handleSentMessageChange} readOnly></input>
        </div>
        <input className="chat-bar" type="text" placeholder="Type your message" value={message} onChange={handleMessageChange}></input>
        <button className='send-btn' onClick={sendMessage}>Send</button>
        </div>

        </div>
    );
}

export default Chat;