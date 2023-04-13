import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Palmetto Weather API',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3333',
      },
    ],
  },
  apis: [
    'apps/weather-api/src/controllers/**/*.ts',
    'libs/models/src/lib/**/*.ts',
  ],
};

const swaggerSpec = swaggerJsDoc(options);

const router = express.Router();

router.use(
  '/',
  express.static('node_modules/swagger-ui-dist/', { index: false }),
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

export default router;
