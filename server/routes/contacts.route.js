const express = require('express');
const router = express.Router();

// import commnet controller
const contacts_controller = require("../controllers/contacts.controller");
// const contacts = contacts_controller.contacts;

// GET all contacts array
router.get("/contacts", contacts_controller.list);

// GET specific contact id
router.get("/contacts/:id", contacts_controller.show);

// POST - add a contact to the contacts array
router.post("/contacts", contacts_controller.create);

module.exports = router;
