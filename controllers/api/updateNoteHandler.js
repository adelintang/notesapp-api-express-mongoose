import response from '../../helpers/response.js';
import { Notes, User } from '../../model/model.js';

const updateNoteHandler = async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;
  const { title, tags, body } = req.body;
  const updatedAt = new Date().toISOString();

  const checkReqBody = !title ? 'title' : !tags ? 'tags' : 'body';

  if (!title || !tags || !body) {
    return response(400, 'fail', { message: `Gagal memperbarui notes. mohon masukkan ${checkReqBody}` }, res);
  }

  try {
    const user = await User.findById(userId);
    if (user.id !== userId) return response(403, 'fail', { message: 'Forbidden for user' }, res);

    const foundNotes = await Notes.find({ userId });

    if (!foundNotes) throw Error();

    const result = await Notes.updateOne({ _id: id }, {
      title, tags, body, updatedAt,
    });

    if (result.modifiedCount) {
      return response(200, 'success', { message: 'Notes berhasil diperbarui' }, res);
    }

    throw Error();
  } catch (err) {
    return response(404, 'fail', { message: 'Gagal memperbarui notes. Id tidak ditemukan' }, res);
  }
};

export default updateNoteHandler;
