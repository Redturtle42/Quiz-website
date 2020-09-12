exports.seed = async (knex) => {
  await knex('categories').del();

  const categories = [{
    title: 'HTML',
    content: 'HTML is the standard markup language for Web pages.',
    /* Itt az Image */
    image_src: 'html-icon.png'
  },
  {
    title: 'CSS',
    content: 'CSS is the language we use to style an HTML document.',
    image_src: 'css-icon.png'
  },
  {
    title: 'JAVASCRIPT',
    content: 'JavaScript is the programming language of the Web',
    image_src: 'js-icon.png'
  }];

  return knex('categories').insert(categories);
};
