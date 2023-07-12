import express from 'express';
import addNoteHandler from '../controllers/api/addNoteHandler.js';
import getAllNotesHandler from '../controllers/api/getAllNotesHandler.js';
import getDetailNoteHandler from '../controllers/api/getDetailNoteHandler.js';
import updateNoteHandler from '../controllers/api/updateNoteHandler.js';
import deleteNoteHandler from '../controllers/api/deleteNoteHandler.js';
import authentication from '../middleware/authentication.js';

const routerApi = express.Router();

routerApi.post('/api/notes', authentication, addNoteHandler);

routerApi.get('/api/notes', authentication, getAllNotesHandler);

routerApi.get('/api/notes/:id', authentication, getDetailNoteHandler);

routerApi.put('/api/notes/:id', authentication, updateNoteHandler);

routerApi.delete('/api/notes/:id', authentication, deleteNoteHandler);

export default routerApi;
