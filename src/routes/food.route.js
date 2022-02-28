"use strict";

const express = require('express');
const {food} = require('../models/index.js')

const router = express.Router();

//Routes
router.get('/test', test);
router.get('/food', getFood);
router.get('/food/:id',getOneFood);

router.post('/addfood',createFood);

router.put('/editFood/:id',editFood);
router.delete('/deletefood/:id',deletefood);

function test(req,res){
    res.send('test');
}
// http://localhost:3030/food (get method)
async function getFood(req, res) {
    let record = await food.findAll();
    res.status(201).json(record)
}
// http://localhost:3030/food/2 (get method)
async function getOneFood(req,res){
    let foodId =  req.params.id ;
    console.log('param',foodId);
    let record =await food.findOne({where:{ id : foodId }});
    res.status(201).json(record);
    
}

// http://localhost:3030/addfood{"name":"yazan"} (post method)
async function createFood(req,res){
    let req_data = req.body;
    console.log('req bodyyy',req_data);
    let record = await food.create(req_data);
    res.status(201).json(record);
}

// http://localhost:3030/editFood{"name":"omar"} (put method)
async function editFood(req,res){
    let foodId =req.params.id;
    let updateFood= await  food.update( req.body , {where:{id : foodId}} );
    res.status(201).json(updateFood);
}

// http://localhost:3030/deletefood/2 (delete method)
async function deletefood(req,res){
    let foodId =  req.params.id;
    let deletedFood=await food.destroy({where:{ id: foodId }});
    res.status(201).json(deletedFood);
}

module.exports = router ;