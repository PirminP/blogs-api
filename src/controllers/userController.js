const userService = require('../services/userService');

async function loginApi(req, res) {
  const { email, password } = req.body;
  const { data, error, code } = await userService.loginApi({ email, password });
  if (error) {
    return res.status(code).json(error);
  }
  return res.status(code).json(data);
}

module.exports = { loginApi };