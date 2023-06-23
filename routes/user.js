import express from 'express';
import registerHandler from '../controllers/auth/registerHandler.js';
import authHandler from '../controllers/auth/authHandler.js';
import tokenHandler from '../controllers/auth/tokenHandler.js';
import logoutHandler from '../controllers/auth/logoutHandler.js';

const routerUser = express.Router();

routerUser.post('/register', registerHandler);

routerUser.post('/login', authHandler);

routerUser.get('/token', tokenHandler);

routerUser.delete('/logout', logoutHandler);

export default routerUser;
