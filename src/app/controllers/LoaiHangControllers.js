const Type = require("../models/Types");
const { mutipleMongooseToObject } = require("../../utils/mongoose");

class LoaiHangControllers {
    index(req, res, next) {
        res.render('loaihang');
    }

    showLoai(req, res, next){
        Type.find({})
            .then(types => {
                res.json({
                    recordsFiltered: types.length,
                    recordsTotal: types.length,
                    data: types,
                });
            })
            .catch(next);
    }

    themLoai(req, res, next){
        var ten_loai = req.body.loaihanghoa;
        var ma_loai = req.body.maloaihanghoa;

        Type.findOne({"type_code": ma_loai})
            .then(type => {
                if(type != null){
                    console.log("Da ton tai");
                }else{
                    Type.create({"type_name": ten_loai, "type_code": ma_loai})
                        .then(loai => {
                            res.json({
                                code: 200
                            });
                        })
                        .catch(next);
                }
            })
            .catch(next);
    }
}

module.exports = new LoaiHangControllers;