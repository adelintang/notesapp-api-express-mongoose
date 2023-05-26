import { response } from '../helpers/response.js';
import { Notes } from '../model/model.js';

const updateNoteHandler = async (req, res) => {
  const { id } = req.params;
  const { title, tags, body } = req.body;
  const updatedAt = new Date().toISOString();

  const checkReqBody = !title ? 'title' : !tags ? 'tags' : 'body';

  if (!title || !tags || !body) {
    return response(400, 'fail', { message: `Gagal memperbarui notes. mohon masukkan ${checkReqBody}` }, res);
  }

  try {
    await Notes.findByIdAndUpdate(id, {
      title, tags, body, updatedAt,
    });

    return response(200, 'success', { message: 'Notes berhasil diperbarui' }, res);
  } catch (err) {
    return response(404, 'fail', { message: 'Gagal memperbarui notes. Id tidak ditemukan' }, res);
  }
};

export { updateNoteHandler };
