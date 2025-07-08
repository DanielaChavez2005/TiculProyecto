const mongoose = require('mongoose');

const AlfareroSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('Alfarero', AlfareroSchema, 'alfareros');