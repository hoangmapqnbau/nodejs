const express = require('express');
const router = express.Router();

const MeController = require('../app/Controllers/MeController')

router.get('/stored', MeController.show);


module.exports = router;