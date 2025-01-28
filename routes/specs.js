const express = require('express');
const router = express.Router();
// const {getUsers} = require("../controllers");
const { specs } = require("../categories.js")

const checkIndex = require("../middleware/check.js")




router.get('/api/specs', (request, response)=>{
    // console.log(request.query);
    // const {
    //     query:{filter, value},
    // } = request;
    
    // if (filter && value)
    //     return response.send(
    //         specs.filter((user) => user [filter].includes(value))
    // );
    // return response.send(specs);

    });

    router.post("/api/specs", (request, response) =>{
        // const { body } = request;
        // const newSpec = { id:specs[specs.length -1].id + 1, ...body };
        // specs.push(newSpec);
        // return response.status(201).send(newSpec);
    
    });

    router.get('/api/specs/:id', (request, response) => {
        // const { checkIndex } = request;
        // const findSpecs = specs[checkIndex];
        //     if (!findSpecs) return response.sendStatus(404);
        //     return response.send(findSpecs);
        });

        router.put("/api/specs/:id", (request, response) => {
            // const {body, checkIndex} = request;
            // specs[checkIndex] = {id: specs[checkIndex].id, ...body};
            // return response.sendStatus(200);
        
        });

        router.patch("/api/specs/:id", (request, response) => {
            // const  { body, checkIndex } = request;
            //     specs[checkIndex] = {...specs[checkIndex], ...body };
            //     return response.sendStatus(200);
        });

        router.delete("/api/specs/:id", (request, response) => {
            // const { checkIndex } = request;
            // specs.splice(checkIndex, 1);
            // return response.sendStatus(200);
            
            });
    
        module.exports = router