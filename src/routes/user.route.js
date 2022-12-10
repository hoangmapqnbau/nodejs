const express = require('express');
const router = express.Router();

const userController = require('../app/Controllers/UserController');
const SitesController = require('../app/Controllers/SitesController');


router.post('/handle-form-actions-trash', userController.handleFormActionTrash);
router.post('/handle-form-actions', userController.handleFormAction);
router.delete('/:id/delete', userController.delete);
router.patch('/:id/restore', userController.restore)
router.delete('/:id', userController.remove);
router.put('/:id', userController.save);
router.get('/create', userController.create);
router.get('/:slug', userController.detail);    
router.get('/:id/edit', userController.edit);
router.post('/store', userController.store);
router.get('/', SitesController.home);

module.exports = router;