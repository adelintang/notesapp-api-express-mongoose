import express from 'express';
import { addNoteHandler } from '../controllers/addNoteHandler.js';
import { getAllNotesHandler } from '../controllers/getAllNotesHandler.js';
import { getDetailNoteHandler } from '../controllers/getDetailNoteHandler.js';
import { updateNoteHandler } from '../controllers/updateNoteHandler.js';
import { deleteNoteHandler } from '../controllers/deleteNoteHandler.js';

const routerApi = express.Router();

routerApi.post('/notes', addNoteHandler);

routerApi.get('/notes', getAllNotesHandler);

routerApi.get('/notes/:id', getDetailNoteHandler);

routerApi.put('/notes/:id', updateNoteHandler);

routerApi.delete('/notes/:id', deleteNoteHandler);

export { routerApi };
