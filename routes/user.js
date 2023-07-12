import express from 'express';
import registerHandler from '../controllers/auth/registerHandler.js';
import authHandler from '../controllers/auth/authHandler.js';
import tokenHandler from '../controllers/auth/tokenHandler.js';
import logoutHandler from '../controllers/auth/logoutHandler.js';

const routerUser = express.Router();

routerUser.post('/user/auth/register', registerHandler);

routerUser.post('/user/auth/login', authHandler);

routerUser.get('/user/auth/token', tokenHandler);

routerUser.delete('/user/auth/logout', logoutHandler);

export default routerUser;
