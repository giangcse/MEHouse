const express = require('express');
const router = express.Router();
const HomeControllers = require('../app/controllers/HomeControllers');

router.get('/', HomeControllers.index);
router.post('/mua', HomeControllers.mua);
router.post('/laysoluong', HomeControllers.laysoluong);

module.exports = router;