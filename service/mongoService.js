const express = require('express');
/* const mongoose = require('mongoose');
 */
/* const categoriesSchema = new mongoose.Schema({
    type: String,
    description: String,
    image_src: String
}, { collection: 'categories' });

const categ = mongoose.model('categories', categoriesSchema) */



const getCategories = () => {

    MongoClient.connect(url, function (err, db) {


    });
};

module.exports = { getCategories }