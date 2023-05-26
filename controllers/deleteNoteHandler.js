import { response } from '../helpers/response.js';
import { Notes } from '../model/model.js';

const deleteNoteHandler = async (req, res) => {
  const { id } = req.params;

  try {
    await Notes.findByIdAndRemove(id);

    return response(200, 'success', { message: 'Notes berhasil dihapus' }, res);
  } catch (err) {
    return response(404, 'fail', { message: 'Notes gagal dihapus. Id tidak ditemukan' }, res);
  }
};

export { deleteNoteHandler };
