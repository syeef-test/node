const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const contactusController = require('../controllers/contactus');
const successController = require('../controllers/success');

router.get('/contactus',contactusController.contactusController);
router.post('/contactus',successController.showSuccess);


module.exports = router;


