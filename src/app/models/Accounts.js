const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    user_name: { type: String },
    password: { type: String },
    full_name: { type: String }
});

module.exports = mongoose.model('Account', Account)