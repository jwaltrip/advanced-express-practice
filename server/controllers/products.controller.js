// import Products mongodb model
const Products = require("../models/ProductModel");

// products LIST fn
module.exports.list = function (req, res, next) {
  // return res.json(products);
  Products.find({}).exec()
    .then(products => {
      return res.send(products);
    })
    .catch(err => {
      console.log("Error retrieving all prodcuts from mongo ", err);
      return res.send(err);
    });
};

// products SHOW fn
module.exports.show = function (req, res, next) {
  Products.findById(req.params.id).exec()
    .then(product => {
      return res.send(product);
    })
    .catch(err => {
      console.log("Error retrieving a single product ", err);
      return res.send(err);
    });
};

// products CREATE fn
module.exports.create = function (req, res, next) {
  // create new products model
  const product = new Products();
  // set data to be saved to mongo
  product.name = req.body.name;
  product.description = req.body.description;
  // insert the new document, and return the newly created doc after it's inserted
  product.save((err, newProduct) => {
    if (err) return res.send(err);

    return res.send(newProduct);
  });
};
