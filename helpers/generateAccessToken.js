import jwt from 'jsonwebtoken';

const generateAccessToken = (name) => jwt.sign(name, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });

export default generateAccessToken;
