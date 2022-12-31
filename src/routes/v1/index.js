const express = require('express');
const {AirportController,FlightController,CityController} = require("../../controllers/index")
const {flightMiddlewares} = require("../../middlewares/index")

const router = express.Router();

// CITY ROUTES
router.post('/city',CityController.create);
router.post('/city/bulk_create',CityController.bulkCreate)
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);


//AIRPORT ROUTES
router.post('/airports',AirportController.create);
// router.post('/airports/bulk_create',AirportController.bulkCreate);
router.delete('/airports/:id',AirportController.destroy);
router.patch('/airports/:id',AirportController.update);
router.get('/airports/:id',AirportController.get);
router.get('/airports',AirportController.getAll);


//FLIGHT ROUTES
router.post('/flights',flightMiddlewares.validatecreateFlight,FlightController.create);
router.get('/flights',FlightController.getAll);
router.get('/flights/:id',FlightController.get)
router.patch('/flights/:id',FlightController.update)
module.exports= router;