const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    product_name: { type: String },
    product_image: { type: String },
    product_description: { type: String },
    product_color: { type: String },
    product_price: { type: Number },
    product_type: { type: String, ref: 'Types' }
});

module.exports = mongoose.model('Product', Product)