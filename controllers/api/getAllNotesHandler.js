import response from '../../helpers/response.js';
import filteredNotes from '../../helpers/filteredNotes.js';
import { Notes, User } from '../../model/model.js';

const getAllNotesHandler = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findById(userId);

    if (user.id !== userId) return response(403, 'fail', { message: 'Forbidden for user' }, res);

    const result = await Notes.find({ userId });
    const notes = filteredNotes(result);

    return response(200, 'success', { data: { notes } }, res);
  } catch (err) {
    response(500, 'fail', { message: `${err.message}` }, res);
  }
};

export default getAllNotesHandler;
