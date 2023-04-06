const express = require('express');
const router = express.Router();

router.get('/admin-dashboard', authMiddleware, adminMiddleware, (req, res) => {
  res.render('admin-dashboard');
});

module.exports = router;
