const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

router.get('/:id', async function (req, res, next) {
    const type_id = req.params.id;

    let stat = await knex('stat')
        .select().from("stat")
        .avg("percentage", { as: "percentage" })
        .join('categories', 'categories.id', '=', 'type_id')
        .where('categories.type', "=", type_id)
        .groupBy("type_id")

    stat = Math.round(stat[0].percentage);

    res.render('statistics-page', { title: "Statistics", stat, type_id });
});

module.exports = router;
