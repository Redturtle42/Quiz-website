const express = require('express');
const knex = require('../db/knex');

/* ***************** index.js ***************** */

const getCategories = () => {
    return knex('categories').select();
};

/* ***************** quiz.js ***************** */

// this array contains the elements of quiz table
const getQuizList = (size, title_id, shuffle) => {

    return knex('quiz')
        .select('quiz.*', 'categories.type').from('quiz')
        .join('categories', 'categories._id', '=', 'quiz.category_id')
        .where('categories.type', title_id)
        // runs when the query success. The db_response is a local variable that contains the result of the query (every item of the quiz table, which contains the same category_id).
        .then((db_response) => {
            // change the order of questions
            shuffle(db_response);
            // cut back to the given size
            db_response = db_response.slice(0, size);
            // iterate over the db_response
            for (let i = 0; i < db_response.length; i++) {
                //unpack and parse the answer JSON string into array of answer object.
                const answer_list = JSON.parse(db_response[i].answer).items;
                // change the order of answers
                shuffle(answer_list);
                // override json-string (quiz table, answer property) value with list of answers. (After that, this column not a string-json anymore but array of objects.)
                db_response[i].answer = answer_list;
            }
            // return the modified list to quiz_list.
            return db_response;
            // logging the error if query fails (line 15-18)
        }).catch((err) => {
            console.log('ERROR:', err);
        })
};

/* ***************** result.js ***************** */


let getCorrectAnswer = (question_id) => {
    return knex('quiz')
        .select('is_correct').from('quiz')
        .where('quiz._id', '=', question_id)
        .then(res => {
            return res[0].is_correct;
        })
};


let getIdOfQuizType = (arrayOfSelectedAnswers) => {
    return knex('quiz')
        .select('category_id').from('quiz')
        .where('_id', '=', arrayOfSelectedAnswers[0][0])
        .then(res => {
            return res[0].category_id;
        })
};

let getTypeOfQuiz = (idOfQuizType) => {
    return knex('categories')
        .select('categories.type')
        .from('categories')
        .join('quiz', 'quiz.category_id', '=', 'categories._id')
        .where('categories._id', '=', idOfQuizType)
        .groupBy('categories.type')
        .then(res => {
            return res[0].type;
        })
};

const saveStatistic = (statistic) => {
    return knex('stat').insert(statistic)
};

/* ***************** stat.js ***************** */

let getStatistic = (typeOfQuiz) => {
    return knex('stat')
        .select().from("stat")
        .avg("percentage", { as: "percentage" })
        .join('categories', 'categories._id', '=', 'type_id')
        .where('categories.type', "=", typeOfQuiz)
        .groupBy("type_id")
        .then(res => {
            // cut of decimal values an unpack RowDataPacket
            console.log(res);
            return Math.round(res[0].percentage);
        })
};

module.exports = { getCategories, getQuizList, getStatistic, getCorrectAnswer, getIdOfQuizType, getTypeOfQuiz, saveStatistic };