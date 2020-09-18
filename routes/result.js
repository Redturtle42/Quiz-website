const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

const weak = "Ehhr! Don't give up! You need more practice!";
const acceptable = "You're on the right track...";
const good = "You seem to be interested in what you do. It only takes a little to perfect your knowledge.";
const perfect = "Wow! You are very clever! Keep it up!";

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
    const perc = calculatePersentage();

    const percentageClassification = () => {
        if (perc <= 25) {
            return weak;
        } else if (25 < perc && perc <= 50) {
            return acceptable;
        } else if (50 < perc && perc <= 75) {
            return good;
        } else {
            return perfect;
        }
    };

    const statistic = {
        type_id: idOfQuizType,
        type_name: typeOfQuiz,
        number_of_question: arrayOfSelectedAnswers.length,
        number_of_correct: correctAnswers,
        percentage: perc
    };

    await knex('stat').insert(statistic);

    res.render('result-page', { title: "Result", correctAnswers, arrayOfSelectedAnswers, typeOfQuiz, percent: perc, percentText: percentageClassification() });
});

module.exports = router;
