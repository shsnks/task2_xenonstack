import React from "react";
import { useNavigate } from "react-router-dom";
import {ProdCard} from "./prodCard";
import { productData} from "../dummyData/prodData.js";
import '../styles/shopsection.css';

function ShopSection(){   

    let navigate = useNavigate();

    const USERNAME = document.cookie
    .split('; ')
    .find((row) => row.startsWith('username='))
    ?.split('=')[1];

    
    function handleGoCart(){
        if(USERNAME === "" || USERNAME === undefined){
            alert('Please Login');
            navigate("/signin");
        }
        else{
            navigate("/userportal");
        }
    }

    return(
        <div className="shop-section">

        <button className="buy-btn" onClick={handleGoCart}>Go to Cart</button>

        <h1 className="team-section-heading">Our Products and Services</h1>

<div className="team-grid">

{productData.map((item,index)=>{
         return <ProdCard id={index}/>
     })}

</div>
        </div>
    );
}

export default  ShopSection;