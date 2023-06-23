import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import 'dotenv/config';
import { MongooseConnect } from './model/model.js';
import routerApi from './routes/api.js';
import routerUser from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 3000;

// connection to mongodb
MongooseConnect();

// body parse middleware
app.use(bodyParser.json());

app.use(cookieParser());

// logging request
app.use(morgan('dev'));

// routes auth
app.use('/', routerUser);

// routes api
app.use('/', routerApi);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
