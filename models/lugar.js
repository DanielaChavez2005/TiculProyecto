const mongoose = require('mongoose');

const LugarSchema = new mongoose.Schema({}, { strict: false }); // esquema abierto
module.exports = mongoose.model('Lugar', LugarSchema, 'lugares');
