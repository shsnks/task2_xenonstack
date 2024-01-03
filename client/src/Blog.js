import React, { Component } from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Articles from "./components/articles";

const blogLanding = {
  title: "Don't miss out on latest developments in cyber security",
  para: "We publish short articles on our upcoming prducts, workshops, and technological developments.",
  img: "media/9.png",
  alt: "Articles"
};

class Blog extends Component {
  
    render() {
      return (
        <div className="Blog">
          <Header />
          <Landing data={blogLanding} />
          <Articles />
          <Footer />
        </div>
      );
    }
  }
  
  export default Blog;