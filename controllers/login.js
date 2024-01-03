const express = require("express");
const mongoose = require("mongoose");
const {userSchema} = require("../database/database.js");
const { connectDb } = require("../server.js");

const User = mongoose.model("User", userSchema);

async function login(req, res) {
    await connectDb()
    const username = req.body.username;
    const password = req.body.password;
    var message = null;
    //ensuring no blank request
    if (username === null || password === null) {
        message="Please enter username and password!";
        const responseMessageData ={
            Message: message
        };
        const messageContent = JSON.stringify(responseMessageData);
        res.status(200).send(messageContent);
    }
    else {

        //checking if user already registered 
        User.findOne({ Username: username }, function (err, foundUser) {

            if (foundUser) {
                if (foundUser.Password === password) {  //checking password
                    message="Login Success";   
                    const responseData ={
                        Message: message
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);

                } else {
                    message="Invalid Password";
                    const responseData ={
                        Message: message
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
                }
            } else {
                message="User Not Registered";
                    const responseData ={
                        Message: message
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
            }
        });
    }
}

module.exports = login;