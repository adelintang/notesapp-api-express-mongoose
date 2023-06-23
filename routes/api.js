import express from 'express';
import addNoteHandler from '../controllers/api/addNoteHandler.js';
import getAllNotesHandler from '../controllers/api/getAllNotesHandler.js';
import getDetailNoteHandler from '../controllers/api/getDetailNoteHandler.js';
import updateNoteHandler from '../controllers/api/updateNoteHandler.js';
import deleteNoteHandler from '../controllers/api/deleteNoteHandler.js';
import authentication from '../middleware/authentication.js';

const routerApi = express.Router();

routerApi.post('/notes', authentication, addNoteHandler);

routerApi.get('/notes', authentication, getAllNotesHandler);

routerApi.get('/notes/:id', authentication, getDetailNoteHandler);

routerApi.put('/notes/:id', authentication, updateNoteHandler);

routerApi.delete('/notes/:id', authentication, deleteNoteHandler);

export default routerApi;
