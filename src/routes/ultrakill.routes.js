const express = require('express');
const router = express.Router();

const ultrakillController = require('../controllers/ultrakill.controller');


router.get('/', ultrakillController.index);
router.get('/enemy/:id', ultrakillController.detail);

module.exports = router;