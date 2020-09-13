const express = require('express');
const knex = require('../db/knex');

const router = express.Router();

/* GET question page. */
router.post('/', async function (req, res, next) {
    const quiz_result = Object.entries(req.body);       //Parse object to array

    let count = 0;
    for (let i = 0; i < quiz_result.length; i++) {
        const question_id = quiz_result[i][0];
        const user_answer = quiz_result[i][1];

        let correct_answer = await knex('answers')
            .select('is_correct', 'answers.question').from('answers')
            .where('answers.id', '=', question_id)
        correct_answer = correct_answer[0].is_correct;      //unpack RowDataPacket

        if (user_answer == correct_answer) {
            count++;
        }
    };

    let categoryId = await knex('answers')
        .select('category_id').from('answers')
        .where('id', '=', quiz_result[0][0])

    categoryId = categoryId[0].category_id;

    console.log(categoryId);

    let question_amount = await knex('answers')
        .select('category_id').count('*', { as: 'sumOfQuestion' })
        .from('answers')
        .where('category_id', '=', categoryId)
        .groupBy('category_id');

    question_amount = question_amount[0].sumOfQuestion;

    console.log(question_amount);


    res.render('result-score', { title: 'Result', correct: count, total: question_amount });
});


module.exports = router;
