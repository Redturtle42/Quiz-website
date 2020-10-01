const express = require('express');
const knex = require('../db/knex');
const Handlebars = require('hbs');
const { join } = require('../db/knex');
const { json } = require('express');
//const service = require('../service/mysqlService')
const service = require('../service/mongoService')

const router = express.Router();

router.get('/:id', async function (req, res, next) {

    //how many questions contains the quiz (5,10)
    const size = req.query.size;
    //what kind of quiz (HTML, CSS, JS)  
    const title_id = req.params.id;

    const quiz_list = await service.getQuizList(size, title_id);
    console.log(quiz_list);
    //increment index of quiz_list by one to display proper value (to not start with 0).
    Handlebars.registerHelper('incremented', function (index) {
        index++;
        return index;
    });
    res.render('quiz-page', { title: "QUIZ", item_list: quiz_list });
});


module.exports = router;


