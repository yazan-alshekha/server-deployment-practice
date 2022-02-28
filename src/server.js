'use strict';

const express = require('express');
const cors = require('cors');

const errorHandler = require('./handlers/500.js');
const notFoundHandler = require('./handlers/404.js');
const validator=require('./middleware/validator.js');
const logger=require('./middleware/logger.js');

const clothesRouter=require("./routes/clothes.route");
const foodRouter = require('./routes/food.route.js');

require('dotenv').config();// to read from . env file 
const app = express();



// 1- Built-in Express middlewares - Application--level
app.use(express.json());// access the body
app.use(cors());


// 2- Application--level/Global custome middleware
app.use(logger);

app.use(clothesRouter);
app.use(foodRouter);

function start(port) {
    app.listen(port, () => console.log(`running on port ${port}`));
}

app.get('/', (req, res) => {
    res.send('this is Home page');
});


app.get('/data', (req, res) => {
    res.json({
        id: 1,
        name: "Test Student",
        email: "test@test.com"
    });
});

app.post('/bad', (req, res) => {
    let number = 12;
    number.forEach(x => console.log(x));
    res.send('this Bad Route ');
})

//        /person?name="anyName" 
app.get('/person',validator,(req,res)=>{
    res.status(200).json({
        name: req.query.name,
    })

});


// middlewares
app.use(errorHandler);
app.use('*', notFoundHandler);




module.exports = {
    app: app,
    start: start
}