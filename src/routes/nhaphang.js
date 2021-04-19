const express = require('express');
const router = express.Router();
const NhapHangControllers = require('../app/controllers/NhapHangControllers');

router.get('/nhaphang', NhapHangControllers.index);
router.get('/nhaphang/show', NhapHangControllers.show);
router.post('/nhaphang/them', NhapHangControllers.them);

module.exports = router;