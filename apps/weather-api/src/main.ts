/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import swaggerRouter from './middleware/swagger';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Middleware
app.use('/swagger', swaggerRouter);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to weather-api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
