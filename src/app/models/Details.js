const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Detail = new Schema({
    bill_id: { type: String, ref: Bills },
    product_name: { type: String, ref: Warehouses },
    product_price: { type: Number, ref: Warehouses },
    product_quantity: { type: Number, ref: Warehouses}
});

module.exports = mongoose.model('Detail', Detail)