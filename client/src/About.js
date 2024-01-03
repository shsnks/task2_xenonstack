import React, { Component } from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Contacts from "./components/contacts";
import Team from "./components/team";
import Gallery from "./components/gallery";

const aboutLanding = {
  title: "We ensure your swift and secure internet surfing.",
  para: "We are a team of skilled and professional, developers and cyber security experts.",
  img: "media/10.png",
  alt: "About"
};

class About extends Component {
  
    render() {
      return (
        <div className="About">
          <Header />
          <Landing data={aboutLanding} />
          <Gallery />
          <Contacts />
          <Footer />
        </div>
      );
    }
  }
  
  export default About;