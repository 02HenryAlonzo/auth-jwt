import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/index.js';

// Datos de usuario ficticios
const users = [
  { id: 1, username: "user1", password: "password123" },
  { id: 2, username: "user2", password: "password123" },
];

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '30m' });
  res.json({ token });
};


