const router = require('express').Router();


router.use('/usuarios', require('./usuarios.route'));
router.use('/rutas', require('./rutas.route'));
router.use('/reviews', require('./reviews.route'));
router.use('/events', require('./events.route.js'));

module.exports = router;