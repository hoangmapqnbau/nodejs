const express = require('express');
const router = express.Router();

const SitesController = require('../app/Controllers/SitesController');


router.get('/:slug', SitesController.orther);    
router.get('/', SitesController.home);

module.exports = router;