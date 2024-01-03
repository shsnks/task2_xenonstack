import React, { Component } from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Chat from "./components/chat";

const chatbotLanding = {
  title: "We are here for you",
  para: "Get your queries cleared by our unique chatbot",
  img: "media/14.png",
  alt: "Chatbot"
};

class Chatbot extends Component {
  
    render() {
      return (
        <div className="Shop">
          <Header />
          <Landing data={chatbotLanding} />
          <Chat />
          <Footer />
        </div>
      );
    }
  }
  
  export default Chatbot;