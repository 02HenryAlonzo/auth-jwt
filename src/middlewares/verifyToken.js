import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/index.js';

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extrae el token del header Authorization

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Agrega el payload del token al objeto request
    next(); // Pasa al siguiente middleware o ruta
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

export default verifyToken;
