import { response } from '../helpers/response.js';
import { Notes } from '../model/model.js';

const getDetailNoteHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Notes.findById(id).exec();
    return response(200, 'success', { data: { note } }, res);
  } catch (err) {
    return response(404, 'fail', { message: 'Note tidak ditemukan' }, res);
  }
};

export { getDetailNoteHandler };
