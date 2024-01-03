import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header";
import Landing from "./components/landing";
import Services from "./components/services";
import Expert from "./components/expert";
import Stats from "./components/stats";
import Contacts from "./components/contacts";
import Events from "./components/events";
import Footer from "./components/footer";
import Chatbot from "./components/chatbot";
// import axios from 'axios'

const homeLanding = {
  title: "Helps you to securely connect to the world over internet",
  para: "We provide security from cyber threats and a secure internet service.",
  img: "media/2.png",
  alt: "Cyber Security"
};

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Chatbot />
        <Landing data={homeLanding} />
        <Services />
        <Expert />
        <Stats />
        <Events />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;