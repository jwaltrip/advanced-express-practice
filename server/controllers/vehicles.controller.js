// import Vehicles mongo model
const Vehicles = require("../models/VehicleModel");

// vehicles LIST fn
module.exports.list = function (req, res, next) {
  Vehicles.find({}).exec()
    .then(vehicless => {
      return res.send(vehicless);
    })
    .catch(err => {
      console.log("Error listing all vehicles ", err);
      return res.send(err);
    });
};

// vehicles SHOW fn
module.exports.show = function (req, res, next) {
  Vehicles.findById(req.params.id).exec()
    .then(vehicle => {
      return res.send(vehicle);
    })
    .catch(err => {
      console.log("Error retrieving a single vehicle from db ", err);
      return res.send(err);
    });
};

// vehicles CREATE fn
module.exports.create = function (req, res, next) {
  // create new Vehicles mongo model
  const vehicle = new Vehicles();
  // set data to be saved to mongo
  vehicle.year = req.body.year;
  vehicle.make = req.body.make;
  vehicle.model = req.body.model;
  // insert the new document, and return the newly created doc after it's inserted
  vehicle.save((err, newVehicle) => {
    if (err) return res.send(err);

    return res.send(newVehicle);
  });
};

