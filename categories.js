//car year
const cars = [
    { id: 1, model: "911 Targa", make: "Porsche" },
    { id: 2, model: "Sierra", make: "GMC" },
    { id: 3, model: "Benz S-Class Sedan", make: "Mercedes" },
    { id: 4, model: "Prius", make: "Toyota" }
];


//car description
const specs = [
    { id: 1, fuel: "Gasoline", priceRange: "$120,100", driveTrain: "AWD" },
    { id: 2, fuel: "Gasoline", priceRange: "$38,300", driveTrain: "AWD" },
    { id: 3, fuel: "Hybrid", priceRange: "$48,450", driveTrain: "AWD or RWD" },
    { id: 4, fuel: "Hybrid", priceRange: "$28,350", driveTrain: "FWD" }

];

//car pictures
const pics = [
    { id: 1, image: "/targa-4s-coupe-32-white.png" },
    { id: 2, image: "/gmc-sierra.jpg" },
    { id: 3, image: "/mercedes-benz-class.png" },
    { id: 4, image: "/prius.png" }

];

module.exports = { cars, specs, pics }
