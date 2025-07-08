const mongoose = require('mongoose');

const ArtesanoSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('Artesano', ArtesanoSchema, 'artesanos');
