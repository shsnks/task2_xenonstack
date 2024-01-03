import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/shopsection.css';
import {productData} from "../dummyData/prodData.js";
import {userData} from "../dummyData/userData.js";

var userCart = [];

function ProdCard(props){

    let navigate = useNavigate();

    const USERNAME = document.cookie
    .split('; ')
    .find((row) => row.startsWith('username='))
    ?.split('=')[1];

    const [btnText, setBtnText] =useState("Buy Now");
    const [cartBtnText, setCartBtnText] =useState("Add to Cart");

    
    const prod = props.id;

    function buyNow(){
        if(USERNAME === "" || USERNAME === undefined){
            alert('Please Login');
            navigate("/signin");
        }
        else{
            var found = userData.find(function (element) {
                return element.Username === USERNAME;
            });
            
            if(found){
                found.Cart.push(prod);
            console.log(found.Cart);
            userCart = found.Cart;
            navigate("/userportal");
            }
            else{
                alert('Backend Problem: User not found');
            }
        }
    }

    function addToCart(){
        if(USERNAME === "" || USERNAME === undefined){
            alert('Please Login');
            navigate("/signin");
        }
        else{
        if(cartBtnText === "Add to Cart"){
            var found = userData.find(function (element) {
                return element.Username === USERNAME;
            });
            found.Cart.push(prod);
            console.log(found.Cart);
            userCart = found.Cart;
            alert('Added to cart');
            setCartBtnText("Remove from Cart");
        }
        else if(cartBtnText === "Remove from Cart"){
             found = userData.find(function (element) {
                return element.Username === USERNAME;
            });
            found.Cart.pop(prod);
            console.log(found.Cart);
            userCart = found.Cart;
            alert('Removed from cart');
            setCartBtnText("Add to Cart");
        }
    }
    }


    const [name, setName] = useState(productData[prod].name);
    const [price, setPrice] = useState(productData[prod].price);
    const [image, setImage] = useState(productData[prod].img);

    return(

<div className="member-card prod-card">
<img className="member-img pro-img" src={image} alt="Member Pic"></img>
<h2 className="member-name prod-name">{name}</h2>
<h2 className="member-desg prod-desg">Rs {price}</h2>
<button className="buy-now-btn" onClick={buyNow}>{btnText}</button>
<button className="add-cart-btn" onClick={addToCart}>{cartBtnText}</button>
</div>
    );
}

export {
    ProdCard, 
    userCart};