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

module.exports = { 
  createCategory,
};