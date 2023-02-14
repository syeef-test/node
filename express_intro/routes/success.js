const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const successController = require('../controllers/success');

const router = express.Router();

router.post('/success',successController.showSuccess);

module.exports = router;