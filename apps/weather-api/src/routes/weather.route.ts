import express from 'express';
import { query, oneOf } from 'express-validator';
import { weatherController } from '../controllers';

const router = express.Router();

router.get(
  '/',
  oneOf([
    query('q').exists().withMessage('Required if zip is not provided'),
    query('zip').exists().withMessage('Required if q is not provided'),
  ]),
  query('q').customSanitizer((value) => {
    if (value) {
      let split = value.split(',');
      split = split.map((x) => x.trim());

      return split.join(',');
    }
  }),
  weatherController.get
);

export default router;
