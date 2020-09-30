const express = require('express');
const knex = require('../db/knex');
const router = express.Router();
//const mongoose = require('mongoose');
//const service = require('../service/mysqlService')
/* const service = require('../service/mongoService')
 */
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);

router.get('/', async function (req, res, next) {
  /* const categories = await service.getCategories(); */
  await client.connect();

  const database = client.db('quiz');
  const collection = database.collection('categories');
  await collection.find().toArray((err, result) => {
    if (err != null) {
      console.log(err);
    } else if (result.length == 0) {
      console.log("There is no result!");
    }
    console.log(result);
    res.render('index', { title: "Welcome to", categories: result });
  });
});

module.exports = router;