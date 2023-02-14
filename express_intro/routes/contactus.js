const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const contactusController = require('../controllers/contactus');

router.get('/contactus',contactusController.contactusController);

module.exports = router;


