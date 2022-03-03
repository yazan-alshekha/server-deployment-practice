"use strict";
// require supertest in order to use it 
const supertest = require('supertest');

const server = require("../src/server");
const request = supertest(server.app);
const { db } = require('../src/models/index');

// to initialize the connection to DataBase
beforeAll(async () => {
    await db.sync();
});

// to close the connections with DataBase
afterAll(async () => {
    await db.drop();
});

let id;

describe('testing DataBase Routes', () => {

    it('can get lists of records', async () => {
        const response = await request.get("/food");
        expect(response.status).toBe(200);
    })

    it('can add new record',async()=>{

        const response = await request.post("/food").send({
            "name":"banana"
        });
        expect(response.status).toBe(201);
        id = response.body.id;
    })

    it('food route , can get one record successfully',async()=>{

        const response = await request.get(`/food/${id}`)
        expect(response.status).toBe(200);
    })

    it('can edit , food route successfully',async ()=>{
        const response = await request.put(`/food/${id}`).send({
            name:"apple"
        });
        expect(response.status).toBe(200)
    })

    it('can delete, food route successfully',async ()=>{
        const response = await request.delete(`/food/${id}`)
        expect(response.status).toBe(200)
    })
    
})