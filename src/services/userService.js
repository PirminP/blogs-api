const { User } = require('../database/models');
const { getTokenLogin } = require('../middlewares/author');

async function loginApi({ email, password }) {
  if (!email || !password) {
    return {
      error: { message: 'Some required fields are missing' },
      code: 400,
    };
  }

  const user = await User.findAll({ where: { email, password } });
  if (!user) {
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

module.exports = { loginApi };