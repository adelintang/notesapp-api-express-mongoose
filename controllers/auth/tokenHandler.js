import jwt from 'jsonwebtoken';
import response from '../../helpers/response.js';
import generateAccessToken from '../../helpers/generateAccessToken.js';
import { User } from '../../model/model.js';

const tokenHandler = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return response(401, 'fail', { message: 'user unauthorized' }, res);
  }

  const refreshToken = token;
  const foundUser = await User.findOne({ refreshToken });

  if (!foundUser) {
    return response(403, 'fail', { message: 'access forbidden' }, res);
  }

  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        response(403, 'faile', { message: `${err.message}` }, res);
      }

      const accessToken = generateAccessToken({ name: user.name });
      res.json({ accessToken });
    });
  } catch (err) {
    response(403, 'fail', { message: `${err.message}` }, res);
  }
};

export default tokenHandler;
