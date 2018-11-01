// import vehicles array and export it
const vehicles = require("../vehicles");
module.exports.vehicles = vehicles;

// vehicles LIST fn
module.exports.list = function (req, res, next) {
  return res.json(vehicles);
};

// vehicles SHOW fn
module.exports.show = function (req, res, next) {
  const vehicle = vehicles.find(v => v._id == req.params.id);
  return res.json(vehicle);
};

// vehicles CREATE fn
module.exports.create = function (req, res, next) {
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
};

