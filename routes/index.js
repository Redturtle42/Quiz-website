var express = require('express');
const knex = require('../db/knex');

var router = express.Router();

/* GET home page on localhost:3004 */

router.get('/', async function (req, res, next) {
  const categories = await knex('categories').select();
  res.render('index', { title: "Welcome to IT Quiz", categories });
});

module.exports = router;
