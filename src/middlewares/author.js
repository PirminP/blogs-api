require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const jwtSecret = process.env.JWT_SECRET;
const jwtSet = { algorithm: 'HS256', expiresIn: '1h' };

function getTokenLogin({ email, password }) {
  return jwt.sign({ email, password }, jwtSecret, jwtSet);
}

async function tokenValidation(req, res, next) {
  const jwtToken = req.headers.authorization;
  if (!jwtToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const validate = jwt.verify(jwtToken, jwtSecret);
    const user = await User.findOne({
      where: { email: validate.email, password: validate.password },
    });
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = { 
  getTokenLogin,
  tokenValidation,
};