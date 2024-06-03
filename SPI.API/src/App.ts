import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import http from 'http';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { setupRoutes } from './Routing';
import { ConnectionOptions } from 'tls';

const environment = process.env.NODE_ENV;

dotenv.config({ path: path.join(__dirname,'../.env') });
dotenv.config({ path: path.join(__dirname,`${environment === 'development' ? '../.env.prod' : '../.env'}`) });

const app = express();

app.set('port', process.env.PORT || 3001);

app.use(cors());
app.use(fileUpload());

//Mongo config
mongoose.connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectionOptions);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => {
  // eslint-disable-next-line no-console
  console.error.bind(console, 'MongoDB connection error:' + error);
});

app.use(bodyParser.json({
  limit: '100mb'
}));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
setupRoutes(app);

const httpServer = http.createServer(app);

httpServer.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('API listening on port ' + app.get('port'));
});