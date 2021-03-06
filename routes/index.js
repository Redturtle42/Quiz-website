const express = require('express');
const router = express.Router();
const service = require('../src/db');

router.get('/', async function (req, res, next) {
  const categories = await service.getCategories();
  res.render('index', { title: "Welcome to IT Quiz", categories });
})

module.exports = router;

