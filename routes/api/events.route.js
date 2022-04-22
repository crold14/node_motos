const router = require('express').Router();
const eventsModel = require('../../models/events.model.js');
const { checkToken } = require('../../helpers/middlewares.js');

router.get('/', async (req, res) => {

    try {
        const [result] = await eventsModel.getAll()

        for (let evento of result) {
            const [resultUsers] = await eventsModel.asistencia(evento.id)
            evento.users = resultUsers

        }

        res.json(result)

    } catch (error) {

        res.json(error)
    }
})

router.get('/:eventId', async (req, res) => {
    try {
        const [result] = await eventsModel.getById(req.params.eventId)
        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
})
router.get('/:idEvent/coments', async (req, res) => {
    try {
        const [result] = await eventsModel.getAllComents(req.params.idEvent)
        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
})



router.post('/asist', checkToken, async (req, res) => {

    req.body.idUser = req.user.id;

    try {
        const [result] = await eventsModel.inscribe(req.body, req.params.idEvent)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})

router.post('/new', checkToken, async (req, res) => {

    req.body.iduser = req.user.id;


    try {
        const [result] = await eventsModel.create(req.body, req.params)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})

router.post('/:idEvent', checkToken, async (req, res) => {

    req.body.iduser = req.user.id;
    console.log(req.body);
    console.log(req.params);

    try {
        const obj = { comentario: req.body.comentario, idEvent: req.params.idEvent, idUser: req.user.id }
        const [result] = await eventsModel.newComentario(obj)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})




module.exports = router;