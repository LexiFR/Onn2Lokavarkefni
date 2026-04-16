const express = require('express');
const router = express.Router();

const ultrakillController = require('../controllers/ultrakill.controller');

router.get("/enemies/new", ultrakillController.getAddEmemyForm);

router.post("/enemies/new", ultrakillController.createNewEnemy);

router.get("/enemies/:id", ultrakillController.getEnemyDetails);

router.get('/', ultrakillController.index);
//router.get('/enemy/:id', ultrakillController.detail);

module.exports = router;