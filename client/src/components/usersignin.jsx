import React, {useState} from "react";
import "../styles/usersignin.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Validator from "validator";
import {userData, addNewUser} from "../dummyData/userData.js";

function Usersignin(){

    const [password1, setPassword1] = useState("password");
    const [password2, setPassword2] = useState("password");
    const [REGNAME, setREGNAME] = useState("");
    const [REGEMAIL, setREGEMAIL] = useState("");
    const [REGUSER, setREGUSER] = useState("");
    const [REGPASS, setREGPASS] = useState("");
    const [LOGUSER, setLOGUSER] = useState("");
    const [LOGPASS, setLOGPASS] = useState("");
    let navigate = useNavigate();

    function handleCheckbox1(){
        if(document.getElementById("checkBox1").checked){
            setPassword1("text");
        }
        else{
            setPassword1("password");
        }
    }

    function handleCheckbox2(){
        if(document.getElementById("checkBox2").checked){
            setPassword2("text");
        }
        else{
            setPassword2("password");
        }
    }

    function handleRegnameChange(event){
        setREGNAME(event.target.value);
    }
    function handleRegemailChange(event){
        setREGEMAIL(event.target.value);
    }
    function handleReguserChange(event){
        setREGUSER(event.target.value);
    }
    function handleRegpassChange(event){
        setREGPASS(event.target.value);
    }
    function handleLoguserChange(event){
        setLOGUSER(event.target.value);
    }
    function handleLogpassChange(event){
        setLOGPASS(event.target.value);
    }

    function registerUser() { 
        if(REGNAME==="" || REGEMAIL ==="" || REGUSER ==="" || REGPASS===""){
            alert('Please fill complete details');
        }
        else if(!Validator.isEmail(REGEMAIL)){
            alert('Enter valid email');
        }
        else{
        axios.post('/register', {
            'name': REGNAME,
            'email': REGEMAIL,
            'username': REGUSER,
            'password': REGPASS
        }).then((res) => {
            if (res.data.Message === "Already registered") {
                alert("Username not available / Already registered");
            }
            else if (res.data.Message === "Registration Success") {
                addNewUser();
                alert("Registration Success");
                const userRegCookie = "username="+REGUSER;
                const passRegCookie = "password="+REGPASS;
                const nameRegCookie = "name="+REGNAME;
                const emailRegCookie = "email="+REGEMAIL;
                document.cookie = userRegCookie; 
                document.cookie = passRegCookie;
                document.cookie = nameRegCookie;
                document.cookie = emailRegCookie;
                navigate("/userportal");
            }
            else if (res.data.Message === "Registration failed.") {
                alert("Registration failed! Please try again");
            }
            else{
                alert("An error occured. Try Again");
            }
        });
    }
    }

    function loginUser(){
        if(LOGUSER ==="" || LOGPASS===""){
            alert('Please fill complete details');
        }
        else{
        axios.post('/login', {
            'username': LOGUSER,
            'password': LOGPASS
        }).then((res) => {
            if (res.data.Message === "User Not Registered") {
                alert("User not found. Please register");
            }
            else if (res.data.Message === "Please enter username and password!") {
                alert("Please enter username and password!");
            }
            else if (res.data.Message === "Invalid Password") {
                alert("Invalid Password");
            }
            else if (res.data.Message === "Login Success") {
                addNewUser();
                alert("Login Success");
                const userRegCookie = "username="+LOGUSER;
                const passRegCookie = "password="+LOGPASS;
                document.cookie = userRegCookie; 
                document.cookie = passRegCookie;
                navigate("/userportal");
            }
        });
    }
    }


    return(
        <div className="user-section">
        <div className="registration-section">
        <h1 className="reg-section-heading">Register Here</h1>
        <input className="register-input" id="regName" value={REGNAME} type="text" name='Name' placeholder='Name' autoComplete="off" onChange={handleRegnameChange}></input>
        <input className="register-input" id="regEmail" value={REGEMAIL} type="email" name='Email' placeholder='Email' autoComplete="off" onChange={handleRegemailChange}></input>
        <input className="register-input" id="regUser" value={REGUSER} type="text" name='Username' placeholder='Username' autoComplete="off" onChange={handleReguserChange}></input>
        <input className="register-input" id="regPass" value={REGPASS} type={password1} name='Password' placeholder='Password' autoComplete="off" onChange={handleRegpassChange}></input>
        <br></br>
        <input className="login-input check" id="checkBox1" type="checkbox" name='Show Password' onClick={handleCheckbox1}></input>
        <label className="checkBox">Show Password</label>
        <br></br>
        <button className="register-btn" onClick={registerUser}>Register Now</button>
        </div>

        <div className="login-section">
        <h1 className="login-section-heading">Login</h1>
        <input className="login-input" id="logUser" value={LOGUSER} type="text" name='Username' placeholder='Username' autoComplete="off" onChange={handleLoguserChange}></input>
        <input className="login-input" id="logPass" value={LOGPASS} type={password2} name='Password' placeholder='Password' autoComplete="off" onChange={handleLogpassChange}></input>
        <br></br>
        <input className="login-input check" id="checkBox2" type="checkbox" name='Show Password' onClick={handleCheckbox2}></input>
        <label className="checkBox">Show Password</label>
        <br></br>
        <button className="login-btn" onClick={loginUser}>Login</button>
        </div>

        </div>
    );
}

export default Usersignin;

