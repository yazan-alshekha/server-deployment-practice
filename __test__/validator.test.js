"use strict";
const server=require('../src/server');

const supertest = require('supertest');
const request = supertest(server.app);



describe('/person route',()=>{
    it('name properity is not defined for /person route',async()=>{
        const response = await request.get('/person?name');
        expect(500).toEqual(response.status);
    })

   
    it('name properity is defined for /person route',async()=>{
        let response=await request.get('/person?name=yazan');
        expect(response.body).toEqual( {'name':'yazan'} );
        expect(response.status).toEqual(200);
        
    })


});