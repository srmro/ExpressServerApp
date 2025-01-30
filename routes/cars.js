const express = require('express');
const router = express.Router();
// const {getUsers} = require("../controllers");
const { cars } = require("../categories.js")






//mvc model,view,controllers
//change router to route


router.get("/api/cars", (request, response) => {
response.status(200).send(`${cars}`);

    // console.log(request.query);


// const {
//     query:{filter, value},
// } = request;

// if (filter && value)
//     return response.send(
//         cars.filter((cars) => user [filter].includes(value))
// );
// return response.send(cars);

});

router.post("/api/cars", (request, response) =>{
    // const { body } = request;
    // const newCar = { id:cars[cars.length -1].id + 1, ...body };
    // cars.push(newCar);
    // return response.status(201).send(newCar);

});

router.get('/api/cars/:id', (request, response) => {
    // const { checkIndex } = request;
    // const findCars = cars[checkIndex];
    //     if (!findCars) return response.sendStatus(404);
    //     return response.send(findCars);
    });

    router.put("/api/cars/:id", (request, response) => {
        // const {body, checkIndex} = request;
        // specs[checkIndex] = {id: cars[checkIndex].id, ...body};
        // return response.sendStatus(200);
    
    });

    router.patch("/api/cars/:id", (request, response) => {
        // const  { body, checkIndex } = request;
        //     cars[checkIndex] = {...cars[checkIndex], ...body };
        //     return response.sendStatus(200);
    });

    router.delete("/api/cars/:id", (request, response) => {
        // const { checkIndex } = request;
        // cars.splice(checkIndex, 1);
        // return response.sendStatus(200);
        
        });



module.exports = router