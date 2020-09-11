exports.seed = function (knex) {
  return knex('answers').del()
    .then(function () {
      return knex('answers').insert([
        {
          question: "What does HTML stand for?",
          answer: '{"items": ["Hyper Text Markup Language?","Home Tool Markup Language","Hyperlinks and Text Markup Language"]}',
          is_correct: 0,
          category_id: 1
        },
        {
          question: "What is the correct HTML element for inserting a line break?",
          answer: '{"items": ["<br>","<break>","<lb>"]}',
          is_correct: 0,
          category_id: 1
        },
        {
          question: "Which character is used to indicate an end tag?",
          answer: '{"items": ["/","*","<"]}',
          is_correct: 0,
          category_id: 1
        },
        {
          question: "How can you make a numbered list?",
          answer: '{"items": ["<ol>","<dl>","<ul>"]}',
          is_correct: 0,
          category_id: 1
        },
        {
          question: "In HTML, which attribute is used to specify that an input field must be filled out?",
          answer: '{"items": ["required","placeholder","validate"]}',
          is_correct: 0,
          category_id: 1
        },
        {
          question: "Which HTML element defines navigation links?",
          answer: '{"items": ["<nav>","<navigation>","<navigate>"]}',
          is_correct: 0,
          category_id: 1
        },
        {
          question: "The HTML <canvas> element is used to:",
          answer: '{"items": ["draw graphics","create draggable elements","display database records"]}',
          is_correct: 0,
          category_id: 1
        },
        {
          question: "Which HTML element defines navigation links?",
          answer: '{"items": ["<nav>","<navigation>","<navigate>"]}',
          is_correct: 0,
          category_id: 2
        },
        {
          question: "The HTML <canvas> element is used to:",
          answer: '{"items": ["draw graphics","create draggable elements","display database records"]}',
          is_correct: 0,
          category_id: 2
        },
        {
          question: "Which HTML element defines navigation links?",
          answer: '{"items": ["<nav>","<navigation>","<navigate>"]}',
          is_correct: 0,
          category_id: 3
        },
        {
          question: "The HTML <canvas> element is used to:",
          answer: '{"items": ["draw graphics","create draggable elements","display database records"]}',
          is_correct: 0,
          category_id: 3
        }
      ]);
    });
};

