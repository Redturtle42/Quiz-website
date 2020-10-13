const express = require('express');
const router = express.Router();
const service = require('../src/db');

router.get('/:type', async function (req, res, next) {
    const typeOfQuiz = req.params.type;
    let stat = await service.getStatistic(typeOfQuiz);
    res.render('statistics-page', { title: "Statistics", stat, typeOfQuiz });
});

module.exports = router;

