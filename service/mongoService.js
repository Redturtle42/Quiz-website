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

let getTypeOfQuiz = (question_id) => {
    const query = { _id: ObjectId(question_id) };
    return db.collection('quiz').find(query).toArray()
        .then(results => {
            return results[0].type;
        })
};


const saveStatistic = (statistic) => {
    return db.collection('stat').insertOne(statistic)
};

/* ***************** stat.js ***************** */

let getStatistic = (typeOfQuiz) => {

    const stat = db.collection('stat').aggregate(
        [{
            $group: {
                _id: typeOfQuiz,
                avg: { $avg: "$percentage" },
            }
        },
        {
            $project: {
                rounded: { $round: ["$avg", 1] }
            }
        }]
    ).toArray()
        .then(results => {
            console.log('results', results);
            return results[0].rounded;
        });
    console.log('stat', stat);
    return stat;
};

module.exports = { getCategories, getQuizList, getCorrectAnswer, getTypeOfQuiz, saveStatistic, getStatistic }