const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');

let db;
MongoClient.connect("mongodb://127.0.0.1:27017/", {
    useUnifiedTopology: true
}).then(client => {
    console.log('MongoDB is connected!')
    db = client.db('quiz')
});

/* ***************** index.js ***************** */

const getCategories = () => {
    const categories = db.collection('categories').find().toArray()
        .then(results => {
            return results;
        })
    return categories;
};

/* ***************** quiz.js ***************** */

const getQuizList = (size, title_id, shuffle) => {
    const query = { type: title_id };
    const questions = db.collection('quiz').find(query).toArray()
        .then(results => {
            shuffle(results);
            results = results.slice(0, size);
            for (let i = 0; i < results.length; i++) {
                const answers = results[i].answer;
                shuffle(answers);
            }
            return results;
        })
    return questions;
};

/* ***************** result.js ***************** */

let getCorrectAnswer = (question_id) => {
    const query = { _id: ObjectId(question_id) };

    return db.collection('quiz').find(query).toArray()
        .then(results => {
            for (answer of results[0].answer) {
                if (answer.is_correct == true) {
                    return answer.id
                }
            }
        })
};

let getIdOfQuizType = (arrayOfSelectedAnswers) => {
    /*   return knex('quiz')
          .select('category_id').from('quiz')
          .where('id', '=', arrayOfSelectedAnswers[0][0])
          .then(res => {
              return res[0].category_id;
          }) */
};

let getTypeOfQuiz = (idOfQuizType) => {
    /* return knex('categories')
        .select('categories.type')
        .from('categories')
        .join('quiz', 'quiz.category_id', '=', 'categories.id')
        .where('categories.id', '=', idOfQuizType)
        .groupBy('categories.type')
        .then(res => {
            return res[0].type;
        }) */
};

const saveStatistic = (statistic) => {
/*     return knex('stat').insert(statistic)
 */};

/* ***************** stat.js ***************** */


module.exports = { getCategories, getQuizList, getCorrectAnswer }