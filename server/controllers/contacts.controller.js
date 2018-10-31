// import contacts array and export it
const contacts = require("../contacts");
module.exports.contacts = contacts;

// contacts LIST fn
module.exports.list = function (req, res, next) {
  return res.json(contacts);
};

// contacts SHOW fn
module.exports.show = function (req, res, next) {
  const contact = contacts.find(c => c._id == req.params.id);
  return res.json(contact);
};
