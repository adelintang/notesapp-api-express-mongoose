import { response } from '../helpers/response.js';
import { Notes } from '../model/model.js';

const addNoteHandler = async (req, res) => {
  const { title, tags, body } = req.body;
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const checkReqBody = !title ? 'title' : !tags ? 'tags' : 'body';

  if (!title || !tags || !body) {
    return response(400, 'fail', { message: `Gagal menambahkan notes. mohon masukkan ${checkReqBody}` }, res);
  }

  const result = await Notes.create({
    title,
    tags,
    body,
    createdAt,
    updatedAt,
  });

  const { _id } = result;

  return response(200, 'success', { message: 'Notes berhasil ditambahkan', data: { noteId: _id } }, res);
};

export { addNoteHandler };
