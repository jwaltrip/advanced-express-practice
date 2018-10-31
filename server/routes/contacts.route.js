const express = require('express');
const router = express.Router();

// import commnet controller
const contacts_controller = require("../controllers/contacts.controller");
const contacts = contacts_controller.contacts;

// GET all contacts array
router.get("/contacts", (req, res, next) => {
  return res.json(contacts);
});

// GET specific contact id
router.get("/contacts/:id", (req, res, next) => {
  const contact = contacts.find(c => c._id == req.params.id);
  return res.json(contact);
});

// POST - add a contact to the contacts array
router.post("/contacts", (req, res, next) => {
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
});

module.exports = router;
