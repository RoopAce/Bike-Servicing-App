const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

router.post('/signup', authController.signUp);
router.post('/login', authController.login);

router.get('/admin', authMiddleware, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  res.json({ message: 'Welcome, admin!' });
});

router.get('/user', authMiddleware, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}!` });
});

module.exports = router;
