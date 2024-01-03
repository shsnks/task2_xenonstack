import React, {useEffect, useState} from 'react';
import '../styles/header.css';
import $ from 'jquery';


function Header(){

  const [style, setStyle] = useState("hide");
  const [searchStyle, setSearchStyle] = useState("hide");
  const [userName, setUserName] = useState("Sign in");
  const [userLink, setUserLink] = useState("/signin");

  const loggedinUser = document.cookie
    .split('; ')
    .find((row) => row.startsWith('username='))
    ?.split('=')[1];

function handleUser(){
  if(loggedinUser === "" || loggedinUser === " " || loggedinUser === undefined){
    setUserName("Sign in");
    setUserLink("/signin");
  }
  else{
    setUserName(loggedinUser);
    setUserLink("/userportal");
  }
}

useEffect(handleUser, []);

  function responsiveBarOpen(){
    setStyle("display");
  }

  function responsiveBarClose(){
    setStyle("hide");
  }

  function openSearch(){
    if(searchStyle === "hide"){
      setSearchStyle("display");
    }
    if(searchStyle === "display"){
      setSearchStyle("hide");
    }
    if(style === "display"){
      setStyle("hide");
    }
  }

  function closeSearch(){
    if(searchStyle === "hide"){
      setSearchStyle("hide");
    }
    if(searchStyle === "display"){
      setSearchStyle("hide");
    }
  }

  function handleSearch(){
    alert('Your result: ');
  }
    
        return (
          <div class="header" id="header">

            <div className={style} id="navDiv">
            <button className='close-btn' onClick={responsiveBarClose}>X</button>
            <a className='nav-div-link' href='/'><button className='nav-div-btn'>Home</button></a>
            <a className='nav-div-link' href='/articles'><button className='nav-div-btn'>Blog</button></a>
            <a className='nav-div-link' href='/service'><button className='nav-div-btn'>Services</button></a>
            <a className='nav-div-link' href='/about'><button className='nav-div-btn'>About</button></a>
            <a className='nav-div-link' href={userLink}><button className='nav-div-btn'>{userName}</button></a>
            <a className='nav-div-link' href='#' onClick={openSearch}><button className='nav-div-btn'>&#128269;</button></a>
            </div>


            <img className="site-logo" alt="logo" src="media/icon1.png"></img>
            <h1 className="site-title" >swiftConnect</h1>
            <div className="nav-bar" id="navBar">
            <a className="nav-link not div-link" href='#' onClick={openSearch}>&#128269;</a>
            <a className="nav-link not div-link" href={userLink}>{userName}</a>
            <a className="nav-link not div-link" href='/about'>About</a>
            <a className="nav-link not div-link" href='/service'>Services</a>
            <a className="nav-link not div-link" href='/articles'>Blog</a>
            <a className="nav-link active not div-link" href='/'>Home</a>
            <a href="#" className="nav-link icon" onClick={responsiveBarOpen}>
            <i className="fa fa-bars"></i>
            </a>
            </div>


            <div className={searchStyle} id="SearchBox">
            <form className="search-form" autoFocus>
            <input className="search-query" type="text" name='searchItem' placeholder='type here to search' ></input>
            <button className="search-btn" onClick={handleSearch}>&#128269;</button>
            <a className="search-btn" onClick={closeSearch}>X</a>
            </form>
            </div>

          </div>

          
        );
      
}
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('#header').addClass('header-bar-scroll');
  } else {
     $('#header').removeClass('header-bar-scroll');
  }
});

export default Header;