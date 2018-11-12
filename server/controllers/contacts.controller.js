// import Contact mongodb Model
const Contacts = require("../models/ContactModel");

// contacts LIST fn
module.exports.list = function (req, res, next) {
  Contacts.find({}).exec()
    .then(contacts => {
      return res.send(contacts);
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
  // create new contacts model
  const contact = new Contacts();
  // set data to be saved to mongo
  contact.name = req.body.name;
  contact.occupation = req.body.occupation;
  contact.avatar = req.body.avatar;
  // insert the new document, and return the newly created doc after it's inserted
  contact.save((err, newContact) => {
    if (err) return res.send(err);

    return res.send(newContact);
  });

};
