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

async function getBlogPostbyId(id) {
  const blogPostbyId = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' },
    ],
  });

  if (!blogPostbyId) {
    return {
      error: { message: 'Post does not exist' },
      code: 404,
    };
  }
  return { 
    data: blogPostbyId, 
    code: 200,
  };
}

module.exports = { 
  getAllBlogPosts,
  getBlogPostbyId,
};
