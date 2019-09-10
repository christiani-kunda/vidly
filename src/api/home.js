const express = require('express');
const router = express.Router();

/** The welcoming api root */
router.get('/', (req, res) => {
    res.send('Welcome to vidly application');
});

module.exports = router;