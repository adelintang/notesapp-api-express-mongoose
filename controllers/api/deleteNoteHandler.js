import response from '../../helpers/response.js';
import { Notes } from '../../model/model.js';

const deleteNoteHandler = async (req, res) => {
  const { name } = req.user;
  const { id } = req.params;

  try {
    const foundNotes = await Notes.find({ username: name });

    if (!foundNotes) throw Error();

    const result = await Notes.deleteOne({ _id: id });

    if (result.deletedCount) {
      return response(200, 'success', { message: 'Notes berhasil dihapus' }, res);
    }

    throw Error();
  } catch (err) {
    return response(404, 'fail', { message: 'Notes gagal dihapus. Id tidak ditemukan' }, res);
  }
};

export default deleteNoteHandler;
