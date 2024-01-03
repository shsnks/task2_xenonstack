import React, {useState} from "react";
import "../styles/articles.css";
import posts from "../dummyData/postData";


function Post(props){

    let title = "", para = "", image = "";

    if(props.num === "one"){
    title = posts.one.title;
    para = posts.one.para;
    image = posts.one.img;
    }

    if(props.num === "two"){
        title = posts.two.title;
        para = posts.two.para;
        image = posts.two.img;
        }

        if(props.num === "three"){
            title = posts.three.title;
            para = posts.three.para;
            image = posts.three.img;
            }

            if(props.num === "four"){
                title = posts.four.title;
                para = posts.four.para;
                image = posts.four.img;
                }

                if(props.num === "five"){
                    title = posts.five.title;
                    para = posts.five.para;
                    image = posts.five.img;
                    }

    

    let trimPara = para.substring(0, 400) + "...";

    const [postTitle, setPostTitle] = useState(title);
    const [postImage, setPostImage] = useState(image);
    const [postStatus, setPostStatus] = useState("Read More");
    const [displayData, setDisplayData] = useState(trimPara);

    function expandButton(){

        if(postStatus === "Read More"){
            setPostStatus("Collapse");
            setDisplayData(para);
        }
        if(postStatus === "Collapse"){
            setPostStatus("Read More");
            setDisplayData(trimPara);
        }

    }
    return(
        <div className="article-card">
        <img className="post-image" src={postImage} alt="PostImage"></img>
        <h1 className="post-title">{postTitle}</h1>
        <p className="post-para">{displayData}
        <button className="post-extension-link" onClick={expandButton}>{postStatus}</button>
        </p>
        </div>
    );
}

export default Post;