import React from "react";
import "../styles/articles.css";
import Post from "./post";




function Articles(){

    


    return(
        <div className="articles-section">
        <h1 className="article-section-title">Recent Articles</h1>

        <div className="articles-grid">

        <Post num="one" />
        <Post num="two" />
        <Post num="three" />
        <Post num="four" />
        <Post num="five" />

        </div>

        </div>
    );
}

export default Articles;