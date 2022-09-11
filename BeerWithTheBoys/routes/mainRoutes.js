const express = require('express');
const controller = require('../controllers/mainController');

const router = express.Router();

router.get('/about', controller.about);

module.exports = router;