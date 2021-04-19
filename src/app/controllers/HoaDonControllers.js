const Bill = require("../models/Bills");
const { mutipleMongooseToObject } = require("../../utils/mongoose");

class HoaDonController {
    index(req, res, next) {
        res.render('hoa-don');
    }
   
    billTable(req, res, next){
        Bill.find({})
            .then(bills => {
                
                res.json({
                    recordsFiltered: bills.length,
                    recordsTotal: bills.length,
                    data: bills,
                });
            })
            .catch(next);
    }
}

module.exports = new HoaDonController;