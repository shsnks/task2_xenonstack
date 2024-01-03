import React, { Component } from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./components/landing";
import UserPortal from "./components/userportal";

const userportalLanding = {
    title: "User Portal",
    para: "You can avail our products and services from here. ",
    img: "media/13.png",
    alt: "User Portal"
  };

  class Userportal extends Component {

  render() {
    return (
      <div className="Userportal">
        <Header />
        <Landing data={userportalLanding} />
        <UserPortal />
        <Footer />
      </div>
    );
  }
}

export default Userportal;