require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECTRET;
const jwtSet = { algorithm: 'HS256', expiresIn: '1h' };

function getTokenLogin({ username, password }) {
  return jwt.sign({ username, password }, jwtSecret, jwtSet);
}

module.exports = { getTokenLogin };
