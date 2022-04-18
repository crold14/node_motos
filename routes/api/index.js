const router = require('express').Router();
const { checkToken, } = require('../../helpers/middlewares')

router.use('/usuarios', require('./usuarios.route'));
router.use('/rutas', require('./rutas.route'));


module.exports = router;