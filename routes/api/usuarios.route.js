const router = require('express').Router();
const usuarioModel = require('../../models/usuario.model');

router.get('/', async (req, res) => {
    console.log(req.user);
    try {
        const [result] = await usuarioModel.getAll()
        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
})


module.exports = router;