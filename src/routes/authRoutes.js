import { Router } from 'express';
import { loginUser } from '../controllers/authController.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = Router();

router.post('/login', loginUser);
router.get('/verify', verifyToken, (req, res) => {
  res.json({ message: 'Token válido', userId: req.user.id });
});

export default router;
