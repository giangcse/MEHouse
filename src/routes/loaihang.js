const express = require('express');
const router = express.Router();
const LoaiHangControllers = require('../app/controllers/LoaiHangControllers');

router.get('/quanlyloaihang', LoaiHangControllers.index);
router.get('/quanlyloaihang/show', LoaiHangControllers.showLoai);
router.post('/quanlyloaihang/them', LoaiHangControllers.themLoai);

module.exports = router;