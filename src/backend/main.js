// see https://github.com/core-process/babel-plugin-js-logger#be-aware
import './logger-init.js';

import express from 'express';
import morgan from 'morgan';

let app = express();

app.use(morgan('combined'));

app.use('/frontend', express.static(__dirname + '/../frontend'));
app.get('*', (req, res) => res.sendFile('index.html', { root: __dirname + '/../frontend' }));

app.listen(3000, '0.0.0.0');
logger.info(`Running on http://localhost:3000`);
