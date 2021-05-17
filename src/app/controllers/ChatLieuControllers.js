const { mutipleMongooseToObject } = require("../../utils/mongoose");
const Materials = require("../models/Materials");

class ChatLieuControllers {
    index(req, res, next) {
        res.render('chatlieu');
    }

    showLoai(req, res, next){
        Materials.find({})
            .then(materials => {
                res.json({
                    recordsFiltered: materials.length,
                    recordsTotal: materials.length,
                    data: materials,
                });
            })
            .catch(next);
    }

    themLoai(req, res, next){
        var ten_loai = req.body.loaichatlieu;
        var ma_loai = req.body.maloaichatlieu;

        Materials.findOne({"material_code": ma_loai})
            .then(material => {
                if(material != null){
                    console.log("Da ton tai");
                }else{
                    Materials.create({"material_name": ten_loai, "material_code": ma_loai})
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

module.exports = new ChatLieuControllers;