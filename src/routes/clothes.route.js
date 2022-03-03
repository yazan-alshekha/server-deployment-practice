"use strict";

const express = require("express");
const {clothes}=require("../models/index");

const router = express.Router();

//Routes
router.get('/testclothes', test);
router.get('/clothes',getClothes);
router.get('/clothes/:id',getOneClothes);

router.post('/addclothes',createClothes);

router.put('/editclothes/:id',editClothes);
router.delete('/deleteclothes/:id',deleteClothes);

function test(req,res){
    res.send('test');
}

// http://localhost:3030/clothes (get method)
async function getClothes(req, res) {
    let record = await clothes.findAll();
    res.status(200).json(record)
}

// http://localhost:3030/clothes/2 (get method)
async function getOneClothes(req,res){
    let foodId =  req.params.id ;
    // console.log('param',foodId);
    let record =await clothes.findOne({where:{ id : foodId }});
    res.status(200).json(record);
    
}

// http://localhost:3030/addclothes{"name":"yazan"} (post method)

// async function createClothes(req,res){
//     let req_data = req.body;
//     console.log('req bodyyy',req_data);
//     let record = await clothes.create(req_data);
//     res.status(201).json(record);
// }
async function createClothes(req,res){
    let req_data = req.body;
    console.log('req bodyyy',req_data);
    let record = await clothes.create(req_data);
    res.status(201).json(record);
}

// http://localhost:3030/editclothes{"name":"omar"} (put method)
async function editClothes(req,res){
    let clothesID =req.params.id;
    let record= await  clothes.update( req.body , {where:{id : clothesID}} );
    res.status(200).json(record);
}

// http://localhost:3030/deleteclothes/2 (delete method)
async function deleteClothes(req,res){
    let clothesID =  req.params.id;
    let record=await clothes.destroy({where:{ id: clothesID }});
    res.status(200).json(record);
}

module.exports = router ;