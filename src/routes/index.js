const HomeRouter = require("./home");
const HoaDonRouter = require("./hoadon");
const LoaiHangRouter = require("./loaihang");
const NhapHangRouter = require("./nhaphang");
const LoginRouter = require('./login');
const AuthMiddleware = require('../middleware/AuthMiddleware');

function route(app){
    app.use('/login', LoginRouter);
    app.use('/', HomeRouter);
    app.use('/', HoaDonRouter);
    app.use('/', LoaiHangRouter);
    app.use('/', NhapHangRouter);
}

module.exports = route;