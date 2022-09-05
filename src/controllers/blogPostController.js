const blogPostService = require('../services/blogPostService');

async function getAllBlogPosts(req, res) {
    const { data, error, code } = await blogPostService.getAllBlogPosts();
    if (error) {
      return res.status(code).json(error);
    }
    return res.status(code).json(data);
}

async function getBlogPostbyId(req, res) {
  const { id } = req.params;
  const { data, error, code } = await blogPostService.getBlogPostbyId(id);
  if (error) {
    return res.status(code).json(error);
  }
  return res.status(code).json(data);
}

module.exports = {
  getAllBlogPosts,
  getBlogPostbyId,
};
