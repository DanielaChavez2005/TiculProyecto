const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('Hotel', HotelSchema, 'hoteles');