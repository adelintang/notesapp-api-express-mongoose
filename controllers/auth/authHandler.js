import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import response from '../../helpers/response.js';
import generateAccessToken from '../../helpers/generateAccessToken.js';
import { User } from '../../model/model.js';

const authHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return response(400, 'fail', { message: 'email and password are required' }, res);

  const foundUser = await User.findOne({ email });

  if (!foundUser) {
    return response(401, 'fail', { message: 'user unauthorized' }, res);
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (match) {
    const userId = { userId: foundUser.id };
    const accessToken = generateAccessToken(userId);
    const refreshToken = jwt.sign(userId, process.env.REFRESH_TOKEN_SECRET);

    await User.updateOne({ _id: foundUser.id }, { refreshToken });

    res.cookie('token', refreshToken, { httpOnly: true, sameSite: 'None' });
    return response(200, 'success', { message: `${foundUser.username} login successfull`, data: { accessToken } }, res);
  }

  return response(401, 'fail', { message: 'user unauthorized' }, res);
};

export default authHandler;
