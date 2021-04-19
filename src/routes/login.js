const express = require('express');
const router = express.Router();
const LoginControllers = require('../app/controllers/LoginControllers');

router.get('/', LoginControllers.index);
router.post('/store', LoginControllers.setSession);

module.exports = router;