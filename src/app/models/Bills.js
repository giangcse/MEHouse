const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
    create_at: { type: Date, default: Date.now },
    total_price: { type: Number },
    staff: { type: String },
    state: { type: String }
});

module.exports = mongoose.model('Bill', Bill)