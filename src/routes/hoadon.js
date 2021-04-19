const express = require('express');
const router = express.Router();
const HoaDonControllers = require('../app/controllers/HoaDonControllers');

router.get('/hoadon', HoaDonControllers.index);
router.get('/getHoaDon', HoaDonControllers.billTable);

module.exports = router;