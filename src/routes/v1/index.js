const express = require('express');
const CityController =require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller")

const router = express.Router();

// CITY ROUTES
router.post('/city',CityController.create);
router.post('/city/bulk_create',CityController.bulkCreate)
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);


//AIRPORT ROUTES
router.post('/airport',AirportController.create);
router.post('/airport/bulk_create',AirportController.bulkCreate);
router.delete('/airport/:id',AirportController.destroy);
router.patch('/airport/:id',AirportController.update);
router.get('/airport/:id',AirportController.get);
router.get('/airport',AirportController.getAll);



module.exports= router;