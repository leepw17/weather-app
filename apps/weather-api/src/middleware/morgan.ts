import morgan, { StreamOptions } from 'morgan';
import logger from './logger';

const stream: StreamOptions = {
  write: (message) => logger.http(message.trim()),
};

const morganMiddleware = morgan(
  function (tokens, req, res) {
    return JSON.stringify({
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: Number.parseFloat(tokens.status(req, res)),
      content_length: tokens.res(req, res, 'content-length'),
      response_time: Number.parseFloat(tokens['response-time'](req, res)),
    });
  },
  { stream }
);

export default morganMiddleware;
