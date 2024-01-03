import React,{useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {ProdCard} from "./prodCard";
import "../styles/userportal.css";
import {productData} from "../dummyData/prodData.js";
import { userCart } from './prodCard';

function UserPortal(){


    let navigate = useNavigate();
    
    const NAME = document.cookie
    .split('; ')
    .find((row) => row.startsWith('name='))
    ?.split('=')[1];
    const USERNAME = document.cookie
    .split('; ')
    .find((row) => row.startsWith('username='))
    ?.split('=')[1];
    const EMAIL = document.cookie
    .split('; ')
    .find((row) => row.startsWith('email='))
    ?.split('=')[1];

    console.log(userCart);



    function handleLogout(){
        document.cookie = "name=";
        document.cookie = "username=";
        document.cookie = "email=";
        document.cookie = "password=";
        navigate("/");
    }

    function handleEmptyCart(){
        setCart([]);
        window.location.reload(true);
    }

    function handleShopping(){
        navigate("/service");
    }

    function handleCheckout(){
        alert("Redirected to payment portal");

    }

    const [name, setName] = useState(NAME);
    const [username, setUserName] = useState(USERNAME);
    const [email, setEmail] = useState(EMAIL);
    const [cart, setCart] = useState(userCart);
    
    var totalPrice = 0;
    for(let i=0; i<userCart.length; i++){
        var currentPrice = productData[userCart[i]].price;
        console.log(currentPrice);
        totalPrice += currentPrice;
    }
    var discount = totalPrice*0.1;
    var netPrice = totalPrice-discount;

    return(
        <div className='portal-section'>
        
        <div className='cart-section'>
        {cart.map((item,index)=>{
         return <ProdCard id={index}/>
     })}
        </div>

        <div className='user-details-section'>
        <h2 className='name'>{name}</h2>
        <p className='username'>Username: {username}</p>
        <p className='email'>Email: {email}</p>
        <hr></hr>
        <p className='totalAmt'>Total Products: {userCart.length}</p>
        <p className='totalAmt'>Total Amount: Rs {totalPrice}</p>
        <p className='dis'>Discount(10%): Rs {discount}</p>
        <h2 className='netAmt'>Net Amount: Rs {netPrice}</h2>
        <button className='buy-btn' onClick={handleCheckout}>Buy Now</button>
        </div>
        <div className='user-account-section'>
        <button className='logout-btn clear-btn' onClick={handleEmptyCart}>Empty Cart</button>
        </div>
        <div className='user-account-section'>
        <button className='logout-btn shop-btn' onClick={handleShopping}>Continue shopping</button>
        </div>
        <div className='user-account-section'>
        <button className='logout-btn' onClick={handleLogout}>Log out</button>
        </div>

        <div>

        </div>

        </div>
    );
    
}

export default UserPortal;