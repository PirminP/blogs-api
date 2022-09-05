const { User, Category, BlogPost } = require('../database/models');

async function getAllBlogPosts() {
  const allBlogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' },
    ],
  });

  if (!allBlogPosts) {
    return {
      error: { message: 'Posts not found' },
      code: 400,
    };
  }
  return {
    data: allBlogPosts,
    code: 200,
  };
}

module.exports = { getAllBlogPosts };
