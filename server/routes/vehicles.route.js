const express = require('express');
const router = express.Router();

// import commnet controller
const vehicle_controller = require("../controllers/vehicles.controller");

// GET all vehicles array
router.get("/vehicles", vehicle_controller.list);

// GET specific vehicle id
router.get("/vehicles/:id", vehicle_controller.show);

// POST - add a vehicle to the vehicles array
router.post("/vehicles", vehicle_controller.create);

module.exports = router;
