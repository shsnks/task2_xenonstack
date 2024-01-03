import React, { Component } from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./components/landing";
import ShopSection from "./components/shopsection";

const shopLanding = {
  title: "Get quality products and services",
  para: "We produce best cyber infrastructure, cyber security services and high speed internet.",
  img: "media/11.png",
  alt: "Shop"
};

class Shop extends Component {
  
    render() {
      return (
        <div className="Shop">
          <Header />
          <Landing data={shopLanding} />
          <ShopSection />
          <Footer />
        </div>
      );
    }
  }
  
  export default Shop;