const express = require('express');
const knex = require('../db/knex');
const Handlebars = require('hbs');
const { join } = require('../db/knex');
const { json } = require('express');

const router = express.Router();

router.get('/:id', async function (req, res, next) {
    //how many questions contains the quiz (5,10)
    const size = req.query.size;
    //what kind of quiz (HTML, CSS, JS)  
    const title_id = req.params.id;

    // this array contains the elements of quiz table
    const quiz_list = await knex('quiz')
        .select('quiz.*', 'categories.type').from('quiz')
        .join('categories', 'categories.id', '=', 'quiz.category_id')
        .where('categories.type', title_id)
        // runs when the query success. The db_response is a local variable that contains the result of the query (every item of the quiz table, which contains the same category_id).
        .then((db_response) => {
            // iterate over the db_response
            for (let i = 0; i < db_response.length; i++) {
                //unpack and parse the answer JSON string into array of answer object.
                const answer_list = JSON.parse(db_response[i].answer).items;
                // change the order of answers
                shuffle(answer_list);
                // override json-string (quiz table, answer property) value with list of answers. (After that, this column not a string-json anymore but array of objects.)
                db_response[i].answer = answer_list;
            }
            // change the order of questions
            shuffle(db_response);
            // cut back to the given size
            db_response = db_response.slice(0, size);
            // return the modified list to quiz_list.
            return db_response;

            // logging the error if query fails (line 15-18)
        }).catch((err) => {
            console.log('ERROR:', err);
        })
    //increment index of quiz_list by one to display proper value (to not start with 0).
    Handlebars.registerHelper('incremented', function (index) {
        index++;
        return index;
    });

    res.render('quiz-page', { title: "QUIZ", item_list: quiz_list });

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


