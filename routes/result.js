const express = require('express');
const knex = require('../db/knex');

const router = express.Router();

/* GET question page. */
router.get('/', async function (req, res, next) {
    const result = await knex('user_answers').select();
    res.render('result-score', { title: 'Result', result });
});

module.exports = router;
