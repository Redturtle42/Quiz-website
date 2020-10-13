module.exports = {
  async up(db) {
    await db.collection('quiz').insertMany([
      {
        question: "What does HTML stand for?",
        answer: [{ "text": "Hyper Text Markup Language", "id": 1, "is_correct": true }, { "text": "Home Tool Markup Language", "id": 2, "is_correct": false }, { "text": "Hyperlinks and Text Markup Language", "id": 3, "is_correct": false }],
        type: "HTML"
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        answer: [{ "text": "<br>", "id": 1, "is_correct": true }, { "text": "<break>", "id": 2, "is_correct": false }, { "text": "<lb>", "id": 3, "is_correct": false }],
        type: "HTML"
      },
      {
        question: "Which character is used to indicate an end tag?",
        answer: [{ "text": "/", "id": 1, "is_correct": true }, { "text": "*", "id": 2, "is_correct": false }, { "text": "<", "id": 3, "is_correct": false }],
        type: "HTML"
      },
      {
        question: "How can you make a numbered list?",
        answer: [{ "text": "<ol>", "id": 1, "is_correct": true }, { "text": "<dl>", "id": 2, "is_correct": false }, { "text": "<ul>", "id": 3, "is_correct": false }],
        type: "HTML"
      },
      {
        question: "In HTML, which attribute is used to specify that an input field must be filled out?",
        answer: [{ "text": "required", "id": 1, "is_correct": true }, { "text": "placeholder", "id": 2, "is_correct": false }, { "text": "validate", "id": 3, "is_correct": false }],
        type: "HTML"
      },
      {
        question: "Which HTML element defines navigation links?",
        answer: [{ "text": "<nav>", "id": 1, "is_correct": true }, { "text": "<navigation>", "id": 2, "is_correct": false }, { "text": "<navigate>", "id": 3, "is_correct": false }],
        type: "HTML"
      }, {
        question: "The HTML <canvas> element is used to:",
        answer: [{ "text": "draw graphics", "id": 1, "is_correct": true }, { "text": "create draggable elements", "id": 2, "is_correct": false }, { "text": "display database records", "id": 3, "is_correct": false }],
        type: "HTML"
      },
      {
        question: "How many headings exist?",
        answer: [{ "text": "6", "id": 1, "is_correct": true }, { "text": "5", "id": 2, "is_correct": false }, { "text": "4", "id": 3, "is_correct": false }],
        type: "HTML"
      },
      {
        question: "How can you create a table?",
        answer: [{ "text": "<table>", "id": 1, "is_correct": true }, { "text": "<tb>", "id": 2, "is_correct": false }, { "text": "<td>", "id": 3, "is_correct": false }],
        type: "HTML"
      },
      {
        question: "Which is a block element?",
        answer: [{ "text": "<div>", "id": 1, "is_correct": true }, { "text": "<button>", "id": 2, "is_correct": false }, { "text": "<span>", "id": 3, "is_correct": false }],
        type: "HTML"
      },
      {
        question: "What does CSS stand for?",
        answer: [{ "text": "Cascading Style Sheets", "id": 1, "is_correct": true }, { "text": "Computer Style Sheets", "id": 2, "is_correct": false }, { "text": "Creative Style Sheets", "id": 3, "is_correct": false }],
        type: "CSS"
      },
      {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answer: [{ "text": "In the <head> section", "id": 1, "is_correct": true }, { "text": "In the <body> section", "id": 2, "is_correct": false }, { "text": "At the end of the document", "id": 3, "is_correct": false }],
        type: "CSS"
      }, {
        question: "Which is the correct CSS syntax?",
        answer: [{ "text": "body {color: black;}", "id": 1, "is_correct": true }, { "text": "{body:color=black;}", "id": 2, "is_correct": false }, { "text": "body:color=black;", "id": 3, "is_correct": false }],
        type: "CSS"
      }, {
        question: "Which CSS property controls the text size?",
        answer: [{ "text": "font-size", "id": 1, "is_correct": true }, { "text": "text-size", "id": 2, "is_correct": false }, { "text": "font-style", "id": 3, "is_correct": false }],
        type: "CSS"
      }, {
        question: "How do you make each word in a text start with a capital letter?",
        answer: [{ "text": "text-transform:capitalize", "id": 1, "is_correct": true }, { "text": "text-style:capitalize", "id": 2, "is_correct": false }, { "text": "transform:capitalize", "id": 3, "is_correct": false }],
        type: "CSS"
      }, {
        question: "How do you select an element with id 'demo'?",
        answer: [{ "text": "#demo", "id": 1, "is_correct": true }, { "text": ".demo", "id": 2, "is_correct": false }, { "text": "*demo", "id": 3, "is_correct": false }],
        type: "CSS"
      }, {
        question: "How do you select all p elements inside a div element?",
        answer: [{ "text": "div p", "id": 1, "is_correct": true }, { "text": "div.p", "id": 2, "is_correct": false }, { "text": "div + p", "id": 3, "is_correct": false }],
        type: "CSS"
      },
      {
        question: "What is the default value of the position property?",
        answer: [{ "text": "static", "id": 1, "is_correct": true }, { "text": "relative", "id": 2, "is_correct": false }, { "text": "absolute", "id": 3, "is_correct": false }],
        type: "CSS"
      },
      {
        question: "Which in not a CSS type??",
        answer: [{ "text": "outline", "id": 1, "is_correct": true }, { "text": "inline", "id": 2, "is_correct": false }, { "text": "external", "id": 3, "is_correct": false }],
        type: "CSS"
      },
      {
        question: "What property should we use to restore the default value?",
        answer: [{ "text": "initial", "id": 1, "is_correct": true }, { "text": "inherit", "id": 2, "is_correct": false }, { "text": "none", "id": 3, "is_correct": false }],
        type: "CSS"
      },
      {
        question: "Where is the correct place to insert a JavaScript?",
        answer: [{ "text": "Both the <head> section and the <body> section are correct", "id": 1, "is_correct": true }, { "text": "The <head> section", "id": 2, "is_correct": false }, { "text": "The <body> section  ", "id": 3, "is_correct": false }],
        type: "JAVASCRIPT"
      },
      {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answer: [{ "text": "if (i != 5)", "id": 1, "is_correct": true }, { "text": "if i =! 5 then", "id": 2, "is_correct": false }, { "text": "if (i <> 5)", "id": 3, "is_correct": false }],
        type: "JAVASCRIPT"
      }, {
        question: "How can you add a comment in a JavaScript?",
        answer: [{ "text": "//This is a comment", "id": 1, "is_correct": true }, { "text": "<!--This is a comment-->", "id": 2, "is_correct": false }, { "text": "# This is a comment", "id": 3, "is_correct": false }],
        type: "JAVASCRIPT"
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: [{ "text": "onclick", "id": 1, "is_correct": true }, { "text": "onmouseclick", "id": 2, "is_correct": false }, { "text": "onchange", "id": 3, "is_correct": false }],
        type: "JAVASCRIPT"
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        answer: [{ "text": "=", "id": 1, "is_correct": true }, { "text": "*", "id": 2, "is_correct": false }, { "text": "x", "id": 3, "is_correct": false }],
        type: "JAVASCRIPT"
      },
      {
        question: "What will the following code return: Boolean(10 > 9)",
        answer: [{ "text": "true", "id": 1, "is_correct": true }, { "text": "false", "id": 2, "is_correct": false }, { "text": "NaN", "id": 3, "is_correct": false }],
        type: "JAVASCRIPT"
      },
      {
        question: "How do you find the number with the highest value of x and y?",
        answer: [{ "text": "Math.max(x, y)", "id": 1, "is_correct": true }, { "text": "ceil(x, y)", "id": 2, "is_correct": false }, { "text": "Math.ceil(x, y)", "id": 3, "is_correct": false }],
        type: "JAVASCRIPT"
      }
      ,
      {
        question: "Which is not a Javascript specific data type?",
        answer: [{ "text": "double", "id": 1, "is_correct": true }, { "text": "number", "id": 2, "is_correct": false }, { "text": "string", "id": 3, "is_correct": false }],
        type: "JAVASCRIPT"
      },
      {
        question: "Which ‘keyword’ refers to the object where it was called?",
        answer: [{ "text": "this", "id": 1, "is_correct": true }, { "text": "$", "id": 2, "is_correct": false }, { "text": "#", "id": 3, "is_correct": false }],
        type: "JAVASCRIPT"
      },
      {
        question: "Which is not a loop type?",
        answer: [{ "text": "if", "id": 1, "is_correct": true }, { "text": "for", "id": 2, "is_correct": false }, { "text": "do-while", "id": 3, "is_correct": false }],
        type: "JAVASCRIPT"
      }
    ])
  },


  async down(db) {
    await db.collection('quiz').deleteMany();
  }
};
