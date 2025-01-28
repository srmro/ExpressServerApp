
const express = require('express');
const router = express.Router();
// const {getUsers} = require("../controllers");
const { pictures } = require("../categories.js")

// const checkIndex = require("../middleware/check.js")



router.get('/api/pics', (request, response)=>{
    // console.log(request.query);
    // const {
    //     query:{filter, value},
    // } = request;
    
    // if (filter && value)
    //     return response.send(
    //         pictures.filter((user) => user [filter].includes(value))
    // );
    // return response.send(pictures);

    });

    router.post("/api/pics", (request, response) =>{
        // const { body } = request;
        // const newPicture = { id:pictures[pictures.length -1].id + 1, ...body };
        // pictures.push(newPicture);
        // return response.status(201).send(newUser);
    
    });

    router.get('/api/pics/:id', (request, response) => {
        // const { checkIndex } = request;
        // const findPics = pictures[checkIndex];
        //     if (!findPics) return response.sendStatus(404);
        //     return response.send(findPics);
        });

        router.put("/api/pics/:id", (request, response) => {
            // const {body, checkIndex} = request;
            // pictures[checkIndex] = {id: pictures[checkIndex].id, ...body};
            // return response.sendStatus(200);
        
        });

        router.patch("/api/pics/:id", (request, response) => {
            // const  { body, checkIndex } = request;
            // pictures[checkIndex] = {...pictures[checkIndex], ...body };
            //     return response.sendStatus(200);
        });

        router.delete("/api/pics/:id", (request, response) => {
            // const { checkIndex } = request;
            // pictures.splice(checkIndex, 1);
            // return response.sendStatus(200);
            
            });

    module.exports = router