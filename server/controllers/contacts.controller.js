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

// contacts CREATE fn
module.exports.create = function (req, res, next) {
  // increment _id +1
  const newContact = {
    _id: contacts[contacts.length-1]._id + 1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar,
  };

  // add new contact to contacts array
  contacts.push(newContact);

  // return the item just added
  return res.json(contacts[contacts.length - 1]);
};
