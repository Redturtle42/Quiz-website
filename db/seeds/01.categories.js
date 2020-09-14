exports.seed = async (knex) => {
  await knex('categories').del();

  const categories = [{
    type: 'HTML',
    description: 'HTML is the standard markup language for Web pages.',
    image_src: 'html-icon.png'
  },
  {
    type: 'CSS',
    description: 'CSS is the language we use to style an HTML document.',
    image_src: 'css-icon.png'
  },
  {
    type: 'JAVASCRIPT',
    description: 'JavaScript is the programming language of the Web',
    image_src: 'js-icon.png'
  }];

  return knex('categories').insert(categories);
};
