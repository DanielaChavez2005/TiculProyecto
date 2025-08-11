const express = require('express');
const router = express.Router();

const Lugar = require('../models/lugar');
const Artesano = require('../models/artesano');
const Alfarero = require('../models/alfarero');

router.get('/lugares', async (req, res) => {
  const lugares = await Lugar.find();
  res.json(lugares);
});

router.get('/artesanos', async (req, res) => {
  const artesanos = await Artesano.find();
  res.json(artesanos);
});

router.get('/alfareros', async (req, res) => {
  const alfareros = await Alfarero.find();
  res.json(alfareros);
});

router.get('/hoteles', async (req, res) => {
  const hoteles = await Hotel.find();
  res.json(hoteles);
});

module.exports = router;
