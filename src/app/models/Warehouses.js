const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Warehouse = new Schema({
    product_name: { type: String, ref: 'Products' },
    product_image: { type: String, ref: 'Products' },
    product_description: { type: String, ref: 'Products' },
    product_color: { type: String, ref: 'Products' },
    product_price: { type: Number, ref: 'Products' },
    product_type: { type: String, ref: 'Types' },
    product_quantity: { type: Number },
    product_price_import: { type: Number },
    product_ship_price: { type: Number },
    product_discount: { type: Number },
    product_import_date: { type: Date, default: Date.now },
    product_after_discount: { type: Number }
});

module.exports = mongoose.model('Warehouse', Warehouse)