const router = require('express').Router();

router.use('/usuarios', require('./usuarios.route'))

module.exports = router;