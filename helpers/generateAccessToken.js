import jwt from 'jsonwebtoken';

const generateAccessToken = (userId) => jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });

export default generateAccessToken;
