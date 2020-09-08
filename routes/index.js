var express = require('express');
const knex = require('../db/knex');

var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  const categories = await knex('categories').select();
  res.render('index', { title: "IT Quiz website", categories });
});

module.exports = router;
