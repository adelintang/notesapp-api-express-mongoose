import response from '../../helpers/response.js';
import filteredNotes from '../../helpers/filteredNotes.js';
import { Notes } from '../../model/model.js';

const getAllNotesHandler = async (req, res) => {
  const result = await Notes.find({});
  const notes = filteredNotes(result);

  response(200, 'success', { data: { notes } }, res);
};

export default getAllNotesHandler;
