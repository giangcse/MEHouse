const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Type = new Schema({
    type_name: { type: String },
    type_code: { type: String }
});

module.exports = mongoose.model('Type', Type)