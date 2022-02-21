'use strict';

const express = require('express');
const errorHandler = require('./handlers/500');
const notFoundHandler = require('./handlers/404');

const app = express();


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


// middlewares
app.use(errorHandler);
app.use('*', notFoundHandler);




module.exports = {
    app: app,
    start: start
}