module.exports = {

  async up(db) {

    await db.collection('categories').insertMany([
      {
        type: "HTML",
        description: "HTML is the standard markup language for Web pages.",
        image_src: 'html-icon.png'
      },
      {
        type: "CSS",
        description: "CSS is the language we use to style an HTML document.",
        image_src: 'css-icon.png'
      },
      {
        type: "JAVASCRIPT",
        description: "JavaScript is the programming language of the Web",
        image_src: 'js-icon.png'
      }
    ])
  },

  async down(db) {
    await db.collection('categories').deleteMany();
  }
};
