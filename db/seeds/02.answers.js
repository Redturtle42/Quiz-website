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
          question: "Which character is used to indicate an end tag?",
          answer: '{"items": [{ "text":"/", "id": 1},{ "text":"*", "id": 2},{"text":"<", "id": 3}]}',
          is_correct: 1,
          category_id: 1
        },
        {
          question: "How can you make a numbered list?",
          answer: '{"items": [{ "text":"<ol>", "id": 1},{ "text":"<dl>", "id": 2},{"text":"<ul>", "id": 3}]}',
          is_correct: 1,
          category_id: 1
        },
        {
          question: "In HTML, which attribute is used to specify that an input field must be filled out?",
          answer: '{"items": [{ "text":"required", "id": 1},{ "text":"placeholder", "id": 2},{"text":"validate", "id": 3}]}',
          is_correct: 1,
          category_id: 1
        },
        {
          question: "Which HTML element defines navigation links?",
          answer: '{"items": [{ "text":"<nav>", "id": 1},{ "text":"<navigation>", "id": 2},{"text":"<navigate>", "id": 3}]}',
          is_correct: 1,
          category_id: 1
        }, {
          question: "The HTML <canvas> element is used to:",
          answer: '{"items": [{ "text":"draw graphics", "id": 1},{ "text":"create draggable elements", "id": 2},{"text":"display database records", "id": 3}]}',
          is_correct: 1,
          category_id: 1
        },
        {
          question: "How many headings exist?",
          answer: '{"items": [{ "text":"6", "id": 1},{ "text":"5", "id": 2},{"text":"4", "id": 3}]}',
          is_correct: 1,
          category_id: 1
        },
        {
          question: "The HTML <canvas> element is used to:",
          answer: '{"items": [{ "text":"<table>", "id": 1},{ "text":"<tb>", "id": 2},{"text":"<td>", "id": 3}]}',
          is_correct: 1,
          category_id: 1
        },
        {
          question: "Which is a block element?",
          answer: '{"items": [{ "text":"<div>", "id": 1},{ "text":"<button>", "id": 2},{"text":"<span>", "id": 3}]}',
          is_correct: 1,
          category_id: 1
        },
        {
          question: "What does CSS stand for?",
          answer: '{"items": [{ "text":"Cascading Style Sheets", "id": 1},{"text":"Computer Style Sheets", "id": 2},{"text":"Creative Style Sheets", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        },
        {
          question: "Where in an HTML document is the correct place to refer to an external style sheet?",
          answer: '{"items": [{ "text":"In the <head> section", "id": 1},{"text":"In the <body> section", "id": 2},{"text":"At the end of the document", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        }, {
          question: "Which is the correct CSS syntax?",
          answer: '{"items": [{ "text":"body {color: black;}", "id": 1},{"text":"{body:color=black;}", "id": 2},{"text":"body:color=black;", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        }, {
          question: "Which CSS property controls the text size?",
          answer: '{"items": [{ "text":"font-size", "id": 1},{"text":"text-size", "id": 2},{"text":"font-style", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        }, {
          question: "How do you make each word in a text start with a capital letter?",
          answer: '{"items": [{ "text":"text-transform:capitalize", "id": 1},{"text":"text-style:capitalize", "id": 2},{"text":"transform:capitalize", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        }, {
          question: "How do you select an element with id 'demo'?",
          answer: '{"items": [{ "text":"#demo", "id": 1},{"text":".demo", "id": 2},{"text":"*demo", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        }, {
          question: "How do you select all p elements inside a div element?",
          answer: '{"items": [{ "text":"div p", "id": 1},{"text":"div.p", "id": 2},{"text":"div + p", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        },
        {
          question: "What is the default value of the position property?",
          answer: '{"items": [{ "text":"static", "id": 1},{"text":"relative", "id": 2},{"text":"absolute", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        },
        {
          question: "Which in not a CSS type??",
          answer: '{"items": [{ "text":"outline", "id": 1},{"text":"inline", "id": 2},{"text":"external", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        },
        {
          question: "What property should we use to restore the default value?",
          answer: '{"items": [{ "text":"initial", "id": 1},{"text":"inherit", "id": 2},{"text":"none", "id": 3}]}',
          is_correct: 1,
          category_id: 2
        },
        {
          question: "Where is the correct place to insert a JavaScript?",
          answer: '{"items": [{ "text":"Both the <head> section and the <body> section are correct", "id": 1},{"text":"The <head> section", "id": 2},{"text":"The <body> section  ", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        },
        {
          question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
          answer: '{"items": [{ "text":"if (i != 5)", "id": 1},{"text":"if i =! 5 then", "id": 2},{"text":"if (i <> 5)", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        }, {
          question: "How can you add a comment in a JavaScript?",
          answer: '{"items": [{ "text":"//This is a comment", "id": 1},{"text":"<!--This is a comment-->", "id": 2},{"text":"# This is a comment", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        },
        {
          question: "Which event occurs when the user clicks on an HTML element?",
          answer: '{"items": [{ "text":"onclick", "id": 1},{"text":"onmouseclick", "id": 2},{"text":"onchange", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        },
        {
          question: "Which operator is used to assign a value to a variable?",
          answer: '{"items": [{ "text":"=", "id": 1},{"text":"*", "id": 2},{"text":"x", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        },
        {
          question: "What will the following code return: Boolean(10 > 9)",
          answer: '{"items": [{ "text":"true", "id": 1},{"text":"false", "id": 2},{"text":"NaN", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        },
        {
          question: "How do you find the number with the highest value of x and y?",
          answer: '{"items": [{ "text":"Math.max(x, y)", "id": 1},{"text":"ceil(x, y)", "id": 2},{"text":"Math.ceil(x, y)", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        }
        ,
        {
          question: "Which is not a Javascript specific data type?",
          answer: '{"items": [{ "text":"double", "id": 1},{"text":"number", "id": 2},{"text":"string", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        },
        {
          question: "Which ‘keyword’ refers to the object where it was called?",
          answer: '{"items": [{ "text":"this", "id": 1},{"text":"$", "id": 2},{"text":"#", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        },
        {
          question: "Which is not a loop type?",
          answer: '{"items": [{ "text":"if", "id": 1},{"text":"for", "id": 2},{"text":"do-while", "id": 3}]}',
          is_correct: 1,
          category_id: 3
        }
      ]);
    });
};

