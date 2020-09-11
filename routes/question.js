const express = require('express');
const knex = require('../db/knex');
const { join } = require('../db/knex');
const { json } = require('express');

const router = express.Router();

/* GET question page. */
router.get('/:id', async function (req, res, next) {
    const title_id = req.params.id;
    const quiz_list = await knex('answers')
        .select('answers.*', 'categories.title').from('answers')
        .join('categories', 'categories.id', '=', 'answers.category_id')
        .where('categories.title', title_id)
        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                const sub_list = JSON.parse(response[i].answer).items;
                response[i].answer = sub_list
            }
            return response
        }).catch((err) => {
            console.log('ERROR:', err);
        })

    res.render('question-page', { title: "Quiz page", item_list: quiz_list });

});

module.exports = router;
