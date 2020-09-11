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




/*  .select('questions.*', 'possible_answers.*', 'categories.*')
    .join('possible_answers', 'possible_answers.question_id', '=', 'questions.id')
    .join('categories', 'categories.id', '=', 'questions.category_id')
    .where(subquery)
    .groupBy('questions.text') */

/*  .select('*').from('questions')


for (const item in my_list) {
 console.log('in foreach', item.text);
*/

/* const answers = await knex('possible_answers')
    .select('answers').from('possible_answers')
    .where('question_id', '=', item.id);
item.answers = answers;
}*/

    // console.log(quiz_list);

/* const dummy_data = [
    {
        "question": "Dummy question",
        "answers": [
            { "text": "answer-1", "isCorrect": true },
            { "text": "answer-2", "isCorrect": false },
            { "text": "answer-3", "isCorrect": false },
        ],
        "category": "HTML"
    }
] */