const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Warehouse = new Schema({
    product_name: { type: String, ref: 'Products' },
    product_image: { type: String, ref: 'Products' },
    product_description: { type: String, ref: 'Products' },
    product_color: { type: String, ref: 'Products' },
    product_price: { type: Number, ref: 'Products' },
    product_type: { type: String, ref: 'Types' },
    product_quantity: { type: Number }
});

module.exports = mongoose.model('Warehouse', Warehouse)