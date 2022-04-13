const router = require('express').Router();
const rutaModel = require('../../models/ruta.model.js');

router.get('/', async (req, res) => {

    try {
        const [result] = await rutaModel.getAll()
        res.json(result)

    } catch (error) {
        console.log(error);
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


module.exports = router;