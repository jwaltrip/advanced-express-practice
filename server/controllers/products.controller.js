// import products array and export it
const products = require("../products");
module.exports.products = products;

// products LIST fn
module.exports.list = function (req, res, next) {
  return res.json(products);
};

// products SHOW fn
module.exports.show = function (req, res, next) {
  const product = products.find(p => p._id == req.params.id);
  return res.json(product);
};

// products CREATE fn
module.exports.create = function (req, res, next) {
  // increment _id +1
  const newProduct = {
    _id: products[products.length-1]._id + 1,
    name: req.body.name,
    description: req.body.description,
    reviews: req.body.reviews,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
  };

  // add new product to products array
  products.push(newProduct);

  // return the item just added
  return res.json(products[products.length - 1]);
};
