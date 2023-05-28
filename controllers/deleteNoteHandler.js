import { response } from '../helpers/response.js';
import { Notes } from '../model/model.js';

const deleteNoteHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Notes.deleteOne({ _id: id });

    if (result.deletedCount) {
      return response(200, 'success', { message: 'Notes berhasil dihapus' }, res);
    }

    throw Error();
  } catch (err) {
    return response(404, 'fail', { message: 'Notes gagal dihapus. Id tidak ditemukan' }, res);
  }
};

export { deleteNoteHandler };
