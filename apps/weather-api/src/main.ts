import express from 'express';
import * as dotenv from 'dotenv';
import morganMiddleware from './middleware/morgan';
import swaggerRouter from './middleware/swagger';
import weatherRouter from './routes/weather.route';

dotenv.config();
const app = express();

// Middleware
app.use(morganMiddleware);
app.use('/swagger', swaggerRouter);

// Routes
app.use('/api/weather', weatherRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
