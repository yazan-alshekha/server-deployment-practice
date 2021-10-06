'use strict';
const server=require('../server');
//dont forget to install supertest on your shell

//create fake server for testing 
const supertest = require('supertest');
const request = supertest(server.app);


//the name of  moduale that i am going to testing  
describe('my API Server',()=>{
    

    it('handles not found request',async()=>{
        const responce = await request.get('/asasdw');
        expect(responce.status).toEqual(404);
    });

    it('handles my internal server errors',async()=>{
        const responce = await request.post('/bad');
        expect(responce.status).toEqual(500);
    });

    it('route works',async()=>{
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
        console.log(response.text);
        expect(response.text).toEqual('this is Home page');
    });


})
