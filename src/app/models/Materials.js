const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Material = new Schema({
    material_name: { type: String },
    material_code: { type: String }
});

module.exports = mongoose.model('Material', Material)