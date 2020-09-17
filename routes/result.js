const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

router.post('/', async function (req, res, next) {
    const arrayOfSelectedAnswers = Object.entries(req.body);       //Parse object to array
    let correctAnswers = 0;
    for (let i = 0; i < arrayOfSelectedAnswers.length; i++) {
        const question_id = arrayOfSelectedAnswers[i][0];
        const user_answer = arrayOfSelectedAnswers[i][1];

        let correct_answer = await knex('quiz')
            .select('is_correct', 'quiz.question').from('quiz')
            .where('quiz.id', '=', question_id)
        correct_answer = correct_answer[0].is_correct;      //unpack RowDataPacket

        if (user_answer == correct_answer) {
            correctAnswers++;
        }
    };

    let idOfQuizType = await knex('quiz')
        .select('category_id').from('quiz')
        .where('id', '=', arrayOfSelectedAnswers[0][0])

    idOfQuizType = idOfQuizType[0].category_id;
    /* 
        let numberOfQuestions = await knex('quiz')
            .select('category_id').count('*', { as: 'sumOfQuestion' })
            .from('quiz')
            .where('category_id', '=', idOfQuizType)
            .groupBy('category_id');
        numberOfQuestions = numberOfQuestions[0].sumOfQuestion;     //unpack RowDataPacket */

    let typeOfQuiz = await knex('categories')
        .select('categories.type')
        .from('categories')
        .join('quiz', 'quiz.category_id', '=', 'categories.id')
        .where('categories.id', '=', idOfQuizType)
        .groupBy('categories.type')

    typeOfQuiz = typeOfQuiz[0].type;     //unpack RowDataPacket

    const calculatePersentage = () => {
        const x = (correctAnswers / arrayOfSelectedAnswers.length) * 100;
        return x;
    };

    const statistic = {
        type_id: idOfQuizType,
        type_name: typeOfQuiz,
        number_of_question: arrayOfSelectedAnswers.length,
        number_of_correct: correctAnswers,
        percentage: calculatePersentage()
    };

    await knex('stat').insert(statistic);

    res.render('result-page', { title: "Result", correctAnswers, arrayOfSelectedAnswers, typeOfQuiz, percent: calculatePersentage() });
});

module.exports = router;
