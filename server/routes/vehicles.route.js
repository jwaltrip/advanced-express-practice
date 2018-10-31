const express = require('express');
const router = express.Router();

// import commnet controller
const vehicle_controller = require("../controllers/vehicles.controller");
const vehicles = vehicle_controller.vehicles;

// GET all vehicles array
router.get("/vehicles", (req, res, next) => {
  return res.json(vehicles);
});

// GET specific vehicle id
router.get("/vehicles/:id", (req, res, next) => {
  const vehicle = vehicles.find(v => v._id == req.params.id);
  return res.json(vehicle);
});

// POST - add a vehicle to the vehicles array
router.post("/vehicles", (req, res, next) => {
  // increment _id +1
  const newVehicle = {
    _id: vehicles[vehicles.length-1]._id + 1,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuels: req.body.fuels,
    city: req.body.city,
    isNew: req.body.isNew,
  };

  // add new vehicle to vehicles array
  vehicles.push(newVehicle);

  // return the item just added
  return res.json(vehicles[vehicles.length - 1]);
});

module.exports = router;
