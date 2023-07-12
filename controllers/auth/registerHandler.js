import bcrypt from 'bcrypt';
import response from '../../helpers/response.js';
import { User } from '../../model/model.js';

const registerHandler = async (req, res) => {
  const { username, email, password } = req.body;
  const checkIdentity = !username ? 'username' : !email ? 'email' : 'password';

  if (!username || !email || !password) {
    return response(400, 'fail', { message: `Register gagal. masukkan ${checkIdentity}` }, res);
  }

  const duplicateEmail = await User.findOne({ email });
  if (duplicateEmail) {
    return response(409, 'fail', { message: 'Email duplikat atau telah digunakan' }, res);
  }

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({
      username, email, password: hashPassword,
    });

    await user.save();
    return response(201, 'success', { message: 'Register berhasil' }, res);
  } catch (err) {
    return response(409, 'fail', { message: `${err.message}` }, res);
  }
};

export default registerHandler;
