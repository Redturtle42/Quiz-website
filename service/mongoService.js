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

const getQuizList = (size, title_id) => {

    const questions = db.collection('quiz').find().toArray()
        .then(results => {
            results = results.slice(0, size);
            shuffle(results);
            return results;
        })
    console.log('questions:', questions);
    return questions;
};

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

module.exports = { getCategories, getQuizList }