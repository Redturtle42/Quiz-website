exports.seed = async (knex) => {
  await knex('possible_answers').del();

  const possible_answers = [{
    text: "Hyper Text Markup Language?",
    is_correct: true,
    question_id: 1
  },
  {
    text: "Home Tool Markup Language",
    is_correct: false,
    question_id: 1
  },
  {
    text: "Hyperlinks and Text Markup Language",
    is_correct: false,
    question_id: 1
  },
  {
    text: "<br>",
    is_correct: true,
    question_id: 2
  },
  {
    text: "<break>",
    is_correct: false,
    question_id: 2
  },
  {
    text: "<lb>",
    is_correct: false,
    question_id: 2
  },
  {
    text: "<body style=\"background-color:yellow;\">",
    is_correct: true,
    question_id: 3
  },
  {
    text: "<background>yellow</background>",
    is_correct: false,
    question_id: 3
  },
  {
    text: "<body bg=\"yellow\">",
    is_correct: false,
    question_id: 3
  },
  {
    text: "<a href=\"http://www.w3schools.com\">W3Schools</a>",
    is_correct: true,
    question_id: 4
  },
  {
    text: "<a name=\"http://www.w3schools.com\">W3Schools.com</a>",
    is_correct: false,
    question_id: 4
  },
  {
    text: "<a url=\"http://www.w3schools.com\">W3Schools.com</a>",
    is_correct: false,
    question_id: 4
  },
  {
    text: "/",
    is_correct: true,
    question_id: 5
  },
  {
    text: "*",
    is_correct: false,
    question_id: 5
  },
  {
    text: "<",
    is_correct: false,
    question_id: 5
  },
  {
    text: "<ol>",
    is_correct: true,
    question_id: 6
  },
  {
    text: "<dl>",
    is_correct: false,
    question_id: 6
  },
  {
    text: "<ul>",
    is_correct: false,
    question_id: 6
  },
  {
    text: "<textarea>",
    is_correct: true,
    question_id: 7
  },
  {
    text: "<input type=\"textbox\">",
    is_correct: false,
    question_id: 7
  },
  {
    text: "<input type=\"textarea\">",
    is_correct: false,
    question_id: 7
  },
  {
    text: "required",
    is_correct: true,
    question_id: 8
  },
  {
    text: "placeholder",
    is_correct: false,
    question_id: 8
  },
  {
    text: "validate",
    is_correct: false,
    question_id: 8
  },
  {
    text: "<nav>",
    is_correct: true,
    question_id: 9
  },
  {
    text: "<navigation>",
    is_correct: false,
    question_id: 9
  },
  {
    text: "<navigate>",
    is_correct: false,
    question_id: 9
  },
  {
    text: "draw graphics",
    is_correct: true,
    question_id: 10
  },
  {
    text: "create draggable elements",
    is_correct: false,
    question_id: 10
  },
  {
    text: "display database records",
    is_correct: false,
    question_id: 10
  }];

  return knex('possible_answers').insert(possible_answers);
};
