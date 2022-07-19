
const express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
const db = require('../models/index');
const user = db.user;
const Op = Sequelize.Op;
const jwt = require("jsonwebtoken");
const { values } = require('lodash');
const { response } = require('express');
const { request } = require('http');
const secretKey = 'mathu';


router.post('/register', async(request, response)=> {
    try {
        const {name, email,password,mobile} = request.body;
        const registration = await user.create({
            name,
            email,
            password,
            mobile,
            userType: 'lead',
            currentBalance: 0,
        })
        if(registration){
            response.send({
                success: true,
                message: "Registration Successful",
                data: registration.dataValues
            })
        } else {
            response.send({
                success: false,
                message: "Registration Failed",
                data: {}
            })
        }

    } catch (ex) {
        let errorMessage =ex.message;
        if(ex.errors.length>0 && ex.errors[0].message && ex.errors[0].message === 'email must be unique')
         {
            errorMessage ='email already exists'
        }
        response.send({
            success: false,
            message: errorMessage,
            data: {}
        })
    }
});

router.post('/login', async(request, response) => {
    // response.send({
    //     success: false,});
    
    // return;
    try {
        const {email, password} = request.body;
        console.log('email: ', email);
        const login = await user.findOne({
            where: {
                email
            }
        });
        if (login && login.dataValues){
            const userData = login.dataValues
            
            if(password === userData.password){
                const accessToken = await jwt.sign({
                    email: userData.email,
                    mobile: userData.mobile
                }, secretKey)
                if(accessToken){
                    response.send({
                        success: true,
                        message: "Logged In",
                        data: login.dataValues,
                        accessToken: accessToken
                    })
                } else {
                    response.send({
                        success: false,
                        message: "LogIn Error"
                    })
                }

             
            } else {
                response.send({
                    success: false,
                    message: "Incorrect Password",
                    data: {}
                })
            }
        } else {
            response.send({
                success: false,
                message: "Email doesnt Exist"
            })
        }

        } catch (ex) {
            console.log('hhhhffffff', ex)
        }
    
    
});

router.post('/addemploy', async(request, response) => {
    try{
        const{name,mobile,amount} = request.body;
        const addemploy = await user.create({
            name,
            mobile,
            amount
        })
        if(addemploy){
            response.send({
                success: true,
                message: "successfull",
                data: addemploy.dataValues
            })
        }else {
            response.send({
                success: false,
            message:"failed",
            data: {}
            })
        }
    }
    catch(ex){
        console.log('hhhhffffff', ex)
    }
    
})
module.exports = router; 