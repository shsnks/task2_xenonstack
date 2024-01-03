const express = require("express");
const mongoose = require("mongoose");
const {userSchema} = require("../database/database.js");
const { connectDb } = require("../server.js");

const User = mongoose.model("User", userSchema);

async function register(req, res) {
    await connectDb()

    console.log("Registration triggered");
    console.log(req.body);

    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    let email = req.body.email;

    console.log(name + email + username + password);

    var message = null;
    User.findOne({ Username: username }, function (err, foundUser) {
        if (!foundUser) {  //ensuring no duplicate entry or signup              

            //creating new user document
            const newUser = new User({
                Name: name,
                Email: email,
                Username: username,
                Password: password
            });
            
            newUser.save(function (errors) {   //saving user data to database
                if (!errors) {
                    message="Registration Success";
                    const responseData ={
                        Message: message
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
                } else {
                    console.log(errors);
                    message="Registration failed.";
                    const responseData ={
                        Message: message
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
                }
            });
        }
        else {
            message="Already registered";
            const responseData ={
                Message: message
            };
            const jsonContent = JSON.stringify(responseData);
            res.status(200).send(jsonContent);
        }
    })

}

module.exports = register;