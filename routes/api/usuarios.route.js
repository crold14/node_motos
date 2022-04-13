const router = require('express').Router();
const bcrypt = require('bcryptjs');
const usuarioModel = require('../../models/usuario.model');

router.get('/', async (req, res) => {

    try {
        const [result] = await usuarioModel.getAll()

        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
})

router.post('/registro', async (req, res) => {


    try {
        const [result] = await usuarioModel.create(req.body)
        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }



})

router.post('/login', async (req, res) => {

    const [result] = await usuarioModel.getByEmail(req.body.email)

    if (result.length === 0) {
        return res.json({ error: 'Email y/o contraseña incorrectos' })
    }
    console.log(result[0]);
    const user = result[0]


    const iguales = bcrypt.compareSync(req.body.password, user.password)

    if (!iguales) {
        return res.json({ error: 'Email y/o contraseña incorrectos' })
    } else {
        res.json({
            success: 'Login correcto',
            token: utils.createToken(user)
        })
    }
})



module.exports = router;