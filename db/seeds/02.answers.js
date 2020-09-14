exports.seed = function (knex) {
  return knex('quiz').del()
    .then(function () {
      return knex('quiz').insert([
        {
          question: "What does HTML stand for?",
          answer: '{"items": [{ "text": "Hyper Text Markup Language?", "id": 1 },{ "text": "Home Tool Markup Language", "id": 2 },{ "text": "Hyperlinks and Text Markup Language", "id": 3 }]}',
          is_correct: 1,
          category_id: 1
        },
        {
          question: "What is the correct HTML element for inserting a line break?",
          answer: '{"items": [{ "text":"<br>", "id": 1},{ "text":"<break>", "id": 2},{"text":"<lb>", "id": 3}]}',
          is_correct: 1,
          category_id: 1
        },
        {
          question: "Which HTML element defines navigation links?",
          answer: '{"items": [{ "text":"<nav>", "id": 1},{"text":"<navigation>", "id": 2},{"text":"<navigate>", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        },
        {
          question: "The HTML <canvas> element is used to:",
          answer: '{"items": [{ "text":"draw graphics", "id": 1},{"text":"create draggable elements", "id": 2},{"text":"display database records", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        },
        {
          question: "Which HTML element defines navigation links?",
          answer: '{"items": [{ "text":"<nav>", "id": 1},{"text":"<navigation>", "id": 2},{"text":"<navigate>", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        },
        {
          question: "The HTML <canvas> element is used to:",
          answer: '{"items": [{ "text":"draw graphics", "id": 1},{"text":"create draggable elements", "id": 2},{"text":"display database records", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        }
      ]);
    });
};

