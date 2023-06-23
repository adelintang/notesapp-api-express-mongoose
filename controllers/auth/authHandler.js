import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import response from '../../helpers/response.js';
import generateAccessToken from '../../helpers/generateAccessToken.js';
import { User } from '../../model/model.js';

const authHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return response(400, 'fail', { message: 'username and password are required' }, res);

  const foundUser = await User.findOne({ username });

  if (!foundUser) {
    return response(401, 'fail', { message: 'user unauthorized' }, res);
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (match) {
    const name = { name: foundUser.username };
    const accessToken = generateAccessToken(name);
    const refreshToken = jwt.sign(name, process.env.REFRESH_TOKEN_SECRET);

    await User.updateOne({ username: foundUser.username }, { refreshToken });

    res.cookie('token', refreshToken, { httpOnly: true, sameSite: 'None' });
    return response(200, 'success', { message: `${username} login successfull`, data: { accessToken } }, res);
  }

  return response(401, 'fail', { message: 'user unauthorized' }, res);
};

export default authHandler;
