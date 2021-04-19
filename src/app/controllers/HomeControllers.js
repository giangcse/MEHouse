const Warehouses = require("../models/Warehouses");
const { mutipleMongooseToObject } = require("../../utils/mongoose");
const Bills = require("../models/Bills");

class HomeControllers {
    index(req, res, next) {
        Warehouses.find({})
            .then(products => {
                res.render('home', {
                    products: mutipleMongooseToObject(products)
                });
            })
            .catch(next);
    }

    laysoluong(req, res, next){
        let product_id = req.body.id;

        Warehouses.findOne({"_id": product_id})
            .then(product => {
                res.json({
                    remain: "Số lượng: " + product.product_quantity
                });
            })
            .catch(next);
    }

    mua(req, res, next){
        let product_id = req.body.id;
        let products = {};
        
        Warehouses.findOne({"_id": product_id})
            .then(product => {
                if(product.product_quantity > 0){
                    Warehouses.findOneAndUpdate({"_id": product_id}, {"product_quantity": (parseInt(product.product_quantity) - 1)})
                        .exec();
                    if(res.cookie){
                        res.cookie("products_0", product_id, { expires: new Date(Date.now() + 900000)});
                        res.cookie("products_1", product_id, { expires: new Date(Date.now() + 900000)});
                    }else{
                        res.cookie("products", product_id, { expires: new Date(Date.now() + 900000)});
                    }
                    
                    
                    res.json({
                        code: 200,
                        message: "Đã thêm " + product.product_name + " vào giỏ hàng"
                    });
                }else{
                    res.json({
                        code: 404,
                        message: "Sản phẩm " + product.product_name + " đã hết hàng trong kho"
                    });
                }
            })
            .catch(next);
    }
}

module.exports = new HomeControllers;