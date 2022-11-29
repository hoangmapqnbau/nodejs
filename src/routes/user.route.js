const express = require('express');
const router = express.Router();

const UsersController = require('../app/Controllers/UserController');
const SitesController = require('../app/Controllers/SitesController');

router.get('/:id/edit', UsersController.edit)
router.get('/create', UsersController.create)
router.post('/store', UsersController.store)
router.get('/:slug', UsersController.detail);    
router.get('/', SitesController.home);

module.exports = router;