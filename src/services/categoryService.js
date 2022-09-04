const { Category } = require('../database/models');

async function createCategory({ name }) {
  if (!name || name.length === 0) {
    return {
      error: { message: '"name" is required' },
      code: 400,
    };
  }

  const category = await Category.create({ name });
  return {
    data: category,
    code: 201,
  };
}

async function getAllCategories() {
  const allCatergories = await Category.findAll();
  if (!allCatergories) {
    return {
      error: { message: 'Categories not found' },
      code: 400,
    };
  }
  return { data: allCatergories, code: 200 };
}

module.exports = { 
  createCategory,
  getAllCategories,
};