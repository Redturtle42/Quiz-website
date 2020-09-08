const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
    const questions = await knex('questions').select();
    res.render('question-page', { title: 'Questions' }, questions);
});

module.exports = router;
