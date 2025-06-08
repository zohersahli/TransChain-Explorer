import express from 'express';
import blockRoutes from './routes/blockRoutes.js';
import { errorHandler } from './utils/errorHandler.js';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to TransChain API 🔗');
});

app.use('/api/blocks', blockRoutes);

app.use(errorHandler); 

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
