const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const weak = "Ehhr! Don't give up! You need more practice!";
const acceptable = "You're on the right way...";
const good = "You seem to be interested in what you do. It only takes a little to perfect your knowledge.";
const perfect = "Wow! You are very clever! Keep it up!";

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
    console.log('questions:', questions);
    return questions;
};

module.exports = { getCategories, getQuizList }