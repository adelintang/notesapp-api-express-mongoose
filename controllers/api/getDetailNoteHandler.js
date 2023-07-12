import response from '../../helpers/response.js';
import { Notes, User } from '../../model/model.js';

const getDetailNoteHandler = async (req, res) => {
  try {
    const { userId } = req.user;
    const { id } = req.params;

    const user = await User.findById(userId);
    if (user.id !== userId) return response(403, 'fail', { message: 'Forbidden for user' }, res);

    const foundNotes = await Notes.find({ userId });

    if (!foundNotes) throw Error();

    const note = await Notes.findById(id).exec();
    return response(200, 'success', { data: { note } }, res);
  } catch (err) {
    return response(404, 'fail', { message: 'Note tidak ditemukan' }, res);
  }
};

export default getDetailNoteHandler;
