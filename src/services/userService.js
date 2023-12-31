const { User } = require('../database/models');
const { getTokenLogin } = require('../middlewares/author');
const { userValidation } = require('../middlewares/userValidation');

async function loginApi({ email, password }) {
  if (!email || !password) {
    return {
      error: { message: 'Some required fields are missing' },
      code: 400,
    };
  }

  const user = await User.findAll({ where: { email, password } });
  if (!user || user.length === 0) {
    return {
      error: { message: 'Invalid fields' },
      code: 400,
    };
  }

  const token = getTokenLogin({ email, password });
  return {
    data: { token }, code: 200,
  };
}

async function createUser({ displayName, email, password, image }) {
  const { error } = userValidation.validate({ displayName, email, password, image });
  if (error) {
    return {
      error: { message: error.message },
      code: 400,
    };
  }

  const user = await User.findAll({ where: { email } });
  if (user.length !== 0) {
    return {
      error: { message: 'User already registered' },
      code: 409,
    };
  }

  await User.create({ displayName, email, password, image });
  const token = getTokenLogin({ email, password });
  return { data: { token }, code: 201 };
}

async function getAllUsers() {
  const allUsers = await User.findAll({
    attributes: { exclude: 'password' },
  });
  if (!allUsers) {
    return {
      error: { message: 'Users not found' },
      code: 400,
    };
  }
  return { data: allUsers, code: 200 };
}

async function getUserbyId(id) {
  const userbyId = await User.findByPk(id, {
    attributes: { exclude: 'password' },
  });
  if (!userbyId) {
    return {
      error: { message: 'User does not exist' },
      code: 404,
    };
  }
  return { data: userbyId, code: 200 };
}

module.exports = { 
  loginApi,
  createUser,
  getAllUsers,
  getUserbyId,
};
