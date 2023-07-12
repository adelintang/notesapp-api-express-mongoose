import response from '../../helpers/response.js';
import { Notes, User } from '../../model/model.js';

const deleteNoteHandler = async (req, res) => {
  try {
    const { userId } = req.user;
    const { id } = req.params;

    const user = await User.findById(userId);
    if (user.id !== userId) return response(403, 'fail', { message: 'Forbidden for user' }, res);

    const foundNotes = await Notes.findOne({ userId });

    if (!foundNotes) throw Error();

    const result = await Notes.deleteOne({ _id: id });

    if (result.deletedCount) {
      return response(200, 'success', { message: 'Notes berhasil dihapus', data: { noteId: foundNotes.id } }, res);
    }

    throw Error();
  } catch (err) {
    return response(404, 'fail', { message: 'Notes gagal dihapus. Id tidak ditemukan' }, res);
  }
};

export default deleteNoteHandler;
