import express from 'express';
import bodyParser from 'body-parser';
import { MongooseConnect } from './model/model.js';
import { routerApi } from './routes/api.js';

const app = express();
const PORT = 3000;

// connection to mongodb
MongooseConnect();

// body parse middleware
app.use(bodyParser.json());

// routes
app.use('/', routerApi);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
