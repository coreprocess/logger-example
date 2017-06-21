import express from 'express';
import morgan from 'morgan';

export default function service() {
  // create express instance
  let app = express();
  // request logging
  app.use(morgan('combined'));
  // serve frontend
  app.use('/frontend', express.static(__dirname + '/../frontend'));
  app.get('*', (req, res) => res.sendFile('index.html', { root: __dirname + '/../frontend' }));
  // start listening
  app.listen(3000, '0.0.0.0');
  logger.info(`Running on http://localhost:3000`);
}
