// import express from 'express';
const express = require("express")
const app = express();

app.use(express.json());

//setting up server/port
const PORT = process.env.PORT || 3040;




// //middleware
const logMiddleware = require("./middleware/log.js");
// const userRoutes = require("./routes/routes.js");


// //routes
const carRoutes = require("./routes/cars.js");
const pictureRoute = require("./routes/pictures.js");
const specsRoute = require("./routes/specs.js");
// const { cars } = require("./categories.js");

app.use("/api/cars", carRoutes );
app.use("/api/pictures", pictureRoute );
app.use("/api/specs", specsRoute);


//base url
app.get("/", (request, response) => {
    response.status(201).send
    ({msg: "You made it!", findCars:"use /api/cars ", findSpecs: "use api/specs", findPics: "use api/pics"});
})




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`);
});