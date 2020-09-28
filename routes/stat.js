const express = require('express');
const knex = require('../db/knex');
const service = require('../service/mysqlService')

const router = express.Router();

router.get('/:type', async function (req, res, next) {
    const typeOfQuiz = req.params.type;

    let stat = await service.getStatistic(typeOfQuiz);

    res.render('statistics-page', { title: "Statistics", stat, type_id: typeOfQuiz });
});

module.exports = router;
