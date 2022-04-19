const router = require('express').Router();


router.use('/usuarios', require('./usuarios.route'));
router.use('/rutas', require('./rutas.route'));


module.exports = router;