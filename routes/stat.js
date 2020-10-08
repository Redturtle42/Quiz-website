const express = require('express');
//const service = require('../service/mysqlService')
const service = require('../service/mongoService')

const router = express.Router();

router.get('/:type', async function (req, res, next) {
    const typeOfQuiz = req.params.type;
    let stat = await service.getStatistic(typeOfQuiz);
    res.render('statistics-page', { title: "Statistics", stat, typeOfQuiz });
});

module.exports = router;

