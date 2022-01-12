const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();

router.route('/').post(homeController.getData);

router.route('/geo/:lat/:lon').get(homeController.getDataGeo);

module.exports = router;
