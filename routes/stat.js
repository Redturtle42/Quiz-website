const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

router.get('/:type', async function (req, res, next) {
    const typeOfQuiz = req.params.type;

    let stat = await knex('stat')
        .select().from("stat")
        .avg("percentage", { as: "percentage" })
        .join('categories', 'categories.id', '=', 'type_id')
        .where('categories.type', "=", typeOfQuiz)
        .groupBy("type_id")

    // cut of decimal values an unpack RowDataPacket
    stat = Math.round(stat[0].percentage);

    res.render('statistics-page', { title: "Statistics", stat, type_id: typeOfQuiz });
});

module.exports = router;
