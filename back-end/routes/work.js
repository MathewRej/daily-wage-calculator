
const { response } = require('express');
const express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();
const db = require('../models/index');
const work = db.works;
const Op = Sequelize.Op;
router.post('/addwork', async(request, response) => {
    try{
        const {place, date, cost_day} = request.body;
    const addworks = await work.create({
        place,
        date,
        cost_day,
    })
    if(addworks){
       
        response.send({
            success:true,
            message: "successfull",
            data: addworks.dataValues
        })
    } else {
        response.send({
            success: false,
            message:"failed",
            data: {}
        })
    }
    }
    catch (ex) {
        console.log('hhhhffffff', ex)
    }
    
})

router.get('/workdetails', async(request, response) =>{
    try{
        const workdetails = await work.findAll()
        if(workdetails){
            response.send({
                success: true,
                data: workdetails
            })
        } else { 
            response.send({
                success: false,
                data: {}
            })

        }
      
    }
    catch(ex){
        console.log("dddgggd",ex)
    }
})
router.post('/deletework', async(request, response) => {
  //  console.log('hit')
    try{
        const {id} = request.body
       // console.log('id', id)
        if(!id) {
            
            response.send({
                success: false,
            });
        }
        
        const deleteWork = await work.destroy({
            where: {
                id
            }
        })
       
        if(deleteWork){
          //  console.log('hhhhhh',deleteWork)
            response.send({
                success:true,
                message:"Deleted"
            })
           
        } else {
            response.send({
                success: false,
                message: "cant delete"
            })
        }
    }
    catch(ex){
        console.log("aaaaaaaaaa",ex)
    }
})
router.post('/editwork', async(request, response) => {
    try{
        const {id, place, date, cost_day} = request.body
        console.log('1111111',id)
        if(!id){
            response.send({
                success: false,
                message: "error" 
            })
        }
        const editwork = await work.update({
                place, date, cost_day
            },
            {
                where: { id }
            })

        if(editwork){
            response.send({
                success: true,
                message: "edit",
                data: editwork

            })
        } else{
            response.send({
                success: false,
                message: "error"
            })
        }
     
    }
    
    catch(ex){
        console.log('ffffff',ex)
    }
})


module.exports = router; 