// import contacts array and export it
const contacts = require("../contacts");
module.exports.contacts = contacts;

// import Contact mongodb Model
const Contacts = require("../models/ContactModel");

// contacts LIST fn
module.exports.list = function (req, res, next) {
  Contacts.find({}).exec()
    .then(contactss => {
      return res.send(contactss);
    })
    .catch(err => {
      console.log(err);
      return res.send("Error retrieving list of all contacts ", err);
    });
};

// contacts SHOW fn
module.exports.show = function (req, res, next) {
  Contacts.findById(req.params.id).exec()
    .then(contact => {
      return res.send(contact);
    })
    .catch(err => {
      console.log(err);
      return res.send("Error retrieving single contact ", err);
    });
};

// contacts CREATE fn
module.exports.create = function (req, res, next) {
  const contact = new Contacts();

  contact.name = req.body.name;
  contact.occupation = req.body.occupation;
  contact.avatar = req.body.avatar;

  contact.save((err, newContact) => {
    if (err) return res.send(err);

    return res.send(newContact);
  });

};
