const express = require('express');
const router = express.Router();

const SitesController = require('../app/Controllers/SitesController');


router.use('/:slug', SitesController.orther);    
router.use('/', SitesController.home);

module.exports = router;