import express from 'express';
import { PORT } from './config/index.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
