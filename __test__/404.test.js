"use strict";
const server=require('../src/server');

const supertest = require('supertest');
const res = require('express/lib/response');
const request = supertest(server.app);

describe('404 handler',()=>{

    it('bad route (is not exist)', async()=>{
        const response=await request.get('/ww');
        expect(response.status).toEqual(404);
     
    });

    it('bad method (post method is not exist)', async()=>{
        const response=await request.post('/ww');
        expect(response.status).toEqual(404);
     
    });


});