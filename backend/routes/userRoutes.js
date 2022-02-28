const express = require('express');
const router = express.Router();
const { 
    registerUser,
    getUser,
    loginUser
 } = require('../controllers/userController');
 const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/test', protect, getUser);


module.exports = router;