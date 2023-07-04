import response from '../../helpers/response.js';
import { Notes } from '../../model/model.js';

const addNoteHandler = async (req, res) => {
  const { title, tags, body } = req.body;
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const checkReqBody = !title ? 'title' : !tags ? 'tags' : 'body';

  if (!title || !tags || !body) {
    return response(400, 'fail', { message: `Gagal menambahkan notes. mohon masukkan ${checkReqBody}` }, res);
  }

  try {
    const { name } = req.user;
    const result = new Notes({
      username: name,
      title,
      tags,
      body,
      createdAt,
      updatedAt,
    });

    const note = await result.save();
    const { _id } = note;

    return response(200, 'success', { message: 'Notes berhasil ditambahkan', data: { noteId: _id } }, res);
  } catch (err) {
    return response(500, 'fail', { message: `Notes gagal ditambahkan. ${err.name}` }, res);
  }
};

export default addNoteHandler;
