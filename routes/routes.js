const express = require('express');
const router = express.Router();
const register = require('../controllers/register');
const login = require('../controllers/login');

router.get('/', (req, res) => {
    res.status(200).json({
        message: "welcome!"
    })
})
router.post('/register', register);
router.post('/login', login);

module.exports = router;