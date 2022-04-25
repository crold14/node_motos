const router = require('express').Router();
const { checkToken } = require('../../helpers/middlewares.js');
const rutaModel = require('../../models/ruta.model.js');

router.get('/', async (req, res) => {

    try {
        const [result] = await rutaModel.getAll()
        res.json(result)

    } catch (error) {

        res.json(error)
    }
})

router.get('/:rutaId', async (req, res) => {
    try {
        const [result] = await rutaModel.getById(req.params.rutaId)
        res.json(result[0])

    } catch (error) {
        res.json(error)
    }

});

router.post('/new', checkToken, async (req, res) => {
    console.log(req.user);
    req.body.userId = req.user.id;
    try {
        const [result] = await rutaModel.create(req.body)
        res.json(result)
    } catch (error) {

        res.json(error)
    }
})


module.exports = router;