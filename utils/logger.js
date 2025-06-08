import fs from 'fs';
import path from 'path';

const logFilePath = path.resolve('error.log');

export const logError = (error) => {
  const time = new Date().toISOString();
  const message = `[${time}] ${error.stack || error}\n`;

  fs.appendFileSync(logFilePath, message, 'utf-8');
};
