import jwt from 'jsonwebtoken';

const generateAccessToken = (name) => jwt.sign(name, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });

export default generateAccessToken;
