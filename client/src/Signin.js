import React, { Component } from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./components/landing";
import UserSignin from "./components/usersignin";

const signinLanding = {
  title: "Signin to unlock best security",
  para: "Register or signin to avail our products, internet and cyber security services.",
  img: "media/12.png",
  alt: "Shop"
};

class Signin extends Component {
  
    render() {
      return (
        <div className="Signin">
          <Header />
          <Landing data={signinLanding} />
          <UserSignin />
          <Footer />
        </div>
      );
    }
  }
  
  export default Signin;