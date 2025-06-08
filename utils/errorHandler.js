import { logError } from './logger.js';

export const errorHandler = (err, req, res, next) => {
  logError(err);
  res.status(500).json({ message: 'Something went wrong on the server.' });
};
