const categoryService = require('../services/categoryService');

async function createCategory(req, res) {
  const { name } = req.body;
  const { data, error, code } = await categoryService
    .createCategory({ name });
  if (error) {
    return res.status(code).json(error);
  }
  return res.status(code).json(data);
}

async function getAllCategories(req, res) {
  const { data, error, code } = await categoryService.getAllCategories();
  if (error) {
    return res.status(code).json(error);
  }
  return res.status(code).json(data);
}

module.exports = { 
  createCategory,
  getAllCategories,
};