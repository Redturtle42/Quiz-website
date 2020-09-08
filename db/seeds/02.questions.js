exports.seed = async (knex) => {
  await knex('questions').del();

  const questions = [{
    text: "What does HTML stand for?",
    category_id: 1
  },
  {
    text: "What is the correct HTML element for inserting a line break?",
    category_id: 1
  },
  {
    text: "What is the correct HTML for adding a background color?",
    category_id: 1
  },
  {
    text: "What is the correct HTML for creating a hyperlink?",
    category_id: 1
  },
  {
    text: "Which character is used to indicate an end tag?",
    category_id: 1
  },
  {
    text: "How can you make a numbered list?",
    category_id: 1
  },
  {
    text: "What is the correct HTML for making a text area?",
    category_id: 1
  },
  {
    text: "In HTML, which attribute is used to specify that an input field must be filled out?",
    category_id: 1
  },
  {
    text: "Which HTML element defines navigation links?",
    category_id: 1
  },
  {
    text: "The HTML <canvas> element is used to:",
    category_id: 1
  }];

  return knex('questions').insert(questions);
};
