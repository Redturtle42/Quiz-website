const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

/* GET home page on localhost:3004 */

router.get('/:id', async function (req, res, next) {
    const type_id = req.params.id;

    const typeOfQuiz = await knex('categories')
        .select()


    res.render('statistics-page', { title: "Statistics", typeOfQuiz, type_id });
});

module.exports = router;
