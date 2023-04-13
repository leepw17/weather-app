/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
import morganMiddleware from './middleware/morgan';
import swaggerRouter from './middleware/swagger';
import weatherRouter from './routes/weather.route';

dotenv.config();
const app = express();

app.use(morganMiddleware);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Middleware
app.use('/swagger', swaggerRouter);

// Routes
app.use('/api/weather', weatherRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
