import React from "react";
import "../styles/contacts.css";

function Contacts(){
    return(
        <div className="contact-section" id="contact">
        <h1 className="section-heading">Contact us</h1>
        <div className="contact-details-box">
        <div className="contact-address">
            <img src="media/location.png" className="location-image" alt="location"></img>
            <h3 className="address-title">Address</h3>
            <p className="contact-section-para">
                XYZ City, New Delhi<br></br>
                Pincode- Ax0012
            </p>
        </div>

        <div className="contact-emails">
            <img src="media/email.png" className="location-image email-image" alt="email"></img>
            <h3 className="address-title">Email Us</h3>
            <p className="contact-section-para">
                info@swiftconnect.com<br></br>
                contact@swiftconnect.com
            </p>
        </div>

        <div className="contact-emails contact-social">
            <img src="media/social.png" className="location-image email-image" alt="Social Media Handles"></img>
            <h3 className="address-title">Social Media</h3>
            <p className="contact-section-para">
               <a href="https://www.instagram.com"><img className="social-img" alt="instagram" src="media/ig.png"></img></a>
               <a href="https://www.twitter.com"><img className="social-img" alt="twitter" src="media/tw.png"></img></a>
               <a href="https://www.linkedin.com"><img className="social-img" alt="linkedin" src="media/li.png"></img></a>
            
            </p>
        </div>
    </div>
        </div>
    );
}

export default Contacts;