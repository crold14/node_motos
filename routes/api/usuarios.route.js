const router = require('express').Router();
const bcrypt = require('bcryptjs');

const usuarioModel = require('../../models/usuario.model');
const utils = require('../../helpers/utils');
const { checkToken } = require('../../helpers/middlewares');

router.get('/', async (req, res) => {

    try {
        const [result] = await usuarioModel.getAll()

        res.json(result)

    } catch (error) {

        res.json(error)
    }
})

router.get('/perfil', checkToken, (req, res) => {

    res.json(req.user)
})



router.delete('/:usuarioId', async (req, res) => {

    try {
        const [result] = await usuarioModel.deleteById(req.params.usuarioId)
        res.json(result)

    } catch (error) {
        res.json(error)
    }

});

router.post('/registro', async (req, res) => {



    const hash = bcrypt.hashSync(req.body.password, 12);
    req.body.password = hash;



    try {
        const [result] = await usuarioModel.create(req.body)
        res.json(result)

    } catch (error) {

        res.json(error)
    }



})

router.post('/login', async (req, res) => {

    const [result] = await usuarioModel.getByEmail(req.body.email)

    if (result.length === 0) {
        return res.json({ error: 'Email y/o contraseña incorrectos' })
    }

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

router.put('/editarPerfil', checkToken, async (req, res) => {
    try {
        const [result] = await usuarioModel.update(req.user.id, req.body)
        res.json(result)

    } catch (error) {

        res.json(error)
    }
});

router.put('/changePassword', checkToken, async (req, res) => {

    console.log('pass', req.body.password);
    const hash = bcrypt.hashSync(req.body.password, 12);
    req.body.password = hash;


    try {
        const [result] = await usuarioModel.changePassword(req.user.id, req.body)
        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
});




module.exports = router;