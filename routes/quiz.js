const express = require('express');
const knex = require('../db/knex');
const Handlebars = require('hbs');
const { join } = require('../db/knex');
const { json } = require('express');

const router = express.Router();

/* GET quiz page. */
router.get('/:id', async function (req, res, next) {
    const size = req.query.size;
    const title_id = req.params.id;

    const quiz_list = await knex('quiz')
        .select('quiz.*', 'categories.type').from('quiz')
        .join('categories', 'categories.id', '=', 'quiz.category_id')
        .where('categories.type', title_id)
        .then((db_response) => {            //this is an array. After the sql query.
            for (let i = 0; i < db_response.length; i++) {
                const answer_list = JSON.parse(db_response[i].answer).items;
                shuffle(answer_list);
                db_response[i].answer = answer_list;
            }
            shuffle(db_response);

            db_response = db_response.slice(0, size);
            return db_response;

        }).catch((err) => {
            console.log('ERROR:', err);
        })
    Handlebars.registerHelper('incremented', function (index) {
        index++;
        return index;
    });
    console.log(quiz_list);
    res.render('quiz-page', { title: "Quiz", item_list: quiz_list, });

});

function shuffle(list_to_shuffle) {
    let new_position, temporary_storage, i;
    for (i = list_to_shuffle.length - 1; i > 0; i--) {
        new_position = Math.floor(Math.random() * (i + 1));
        temporary_storage = list_to_shuffle[i];
        list_to_shuffle[i] = list_to_shuffle[new_position];
        list_to_shuffle[new_position] = temporary_storage;
    }
    return list_to_shuffle;
}

module.exports = router;


