const Warehouses = require("../models/Warehouses");
const Types = require("../models/Types");
const { mutipleMongooseToObject } = require("../../utils/mongoose");

class NhapHangControllers {
    index(req, res, next) {
        Types.find({})
            .sort({"type_code": 1})
            .then(types => {
                res.render("nhaphang", {
                    types: mutipleMongooseToObject(types)
                });
            })
            .catch(next);
    }

    show(req, res, next){
        Warehouses.find({})
            .then(warehouses => {
                res.json({
                    recordsFiltered: warehouses.length,
                    recordsTotal: warehouses.length,
                    data: warehouses,
                });
            })
            .catch(next);
    }

    them(req, res, next){
        var loai_hang = req.body.product_type;
        var ten_hang = req.body.product_name;
        var hinh_hang = req.body.product_image;
        var mau_hang = req.body.product_color;
        var gia_hang = req.body.product_price;
        var luong_hang = req.body.product_quantity;
        var mota_hang = req.body.product_description;

        Warehouses.create({
            "product_type": loai_hang,
            "product_name": ten_hang,
            "product_image": hinh_hang,
            "product_color": mau_hang,
            "product_price": gia_hang,
            "product_quantity": luong_hang,
            "product_description": mota_hang
        })
            .then(warehouse => {
                res.json({
                    code: 200
                });
            })
            .catch(next);
    }
}

module.exports = new NhapHangControllers;