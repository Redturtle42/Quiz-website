const express = require('express');
const router = express.Router();
//const service = require('../service/mysqlService')
const service = require('../service/mongoService')


const weak = "Ehhr! Don't give up! You need more practice!";
const acceptable = "You're on the right way...";
const good = "You seem to be interested in what you do. It only takes a little to perfect your knowledge.";
const perfect = "Wow! You are very clever! Keep it up!";

router.post('/', async function (req, res, next) {
    // Parse object from req.body to array. (key = quiz.id, value = selected answer)
    // {'1': '0', ..}   =>   [['1', '0'], ..]
    const arrayOfSelectedAnswers = Object.entries(req.body);
    let correctAnswers = 0;

    for (let i = 0; i < arrayOfSelectedAnswers.length; i++) {
        const question_id = arrayOfSelectedAnswers[i][0];
        const user_answer = arrayOfSelectedAnswers[i][1];
        let correct_answer = await service.getCorrectAnswer(question_id);
        if (user_answer == correct_answer) {
            correctAnswers++;
        }
    };

    const typeOfQuiz = await service.getTypeOfQuiz(arrayOfSelectedAnswers[0][0]);
    const percent = (correctAnswers / arrayOfSelectedAnswers.length) * 100;

    const percentageClassification = () => {
        if (percent <= 25) {
            return weak;
        } else if (25 < percent && percent <= 50) {
            return acceptable;
        } else if (50 < percent && percent <= 75) {
            return good;
        } else {
            return perfect;
        }
    };

    // save statistics data to database (stat table)
    const statistic = {
        type_name: typeOfQuiz,
        number_of_question: arrayOfSelectedAnswers.length,
        number_of_correct: correctAnswers,
        percentage: percent
    };

    await service.saveStatistic(statistic);

    res.render('result-page', { title: "Result", correctAnswers, arrayOfSelectedAnswers, typeOfQuiz, percent, percentText: percentageClassification() });
});

module.exports = router;
