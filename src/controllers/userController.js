const userService = require('../services/userService');

async function loginApi(req, res) {
  const { email, password } = req.body;
  const { data, error, code } = await userService.loginApi({ email, password });
  if (error) {
    return res.status(code).json(error);
  }
  return res.status(code).json(data);
}

async function createUser(req, res) {
  const { displayName, email, password, image } = req.body;
  const { data, error, code } = await userService
    .createUser({ displayName, email, password, image });
  if (error) {
    return res.status(code).json(error);
  }
  return res.status(code).json(data);
}

async function getAllUsers(req, res) {
  const { data, error, code } = await userService.getAllUsers();
  if (error) {
    return res.status(code).json(error);
  }
  return res.status(code).json(data);
}

module.exports = { 
  loginApi,
  createUser,
  getAllUsers,
};