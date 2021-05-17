const express = require('express');
const router = express.Router();
const ChatLieuControllers = require('../app/controllers/ChatLieuControllers');

router.get('/quanlychatlieu', ChatLieuControllers.index);
router.get('/quanlychatlieu/show', ChatLieuControllers.showLoai);
router.post('/quanlychatlieu/them', ChatLieuControllers.themLoai);

module.exports = router;