const router = require('express').Router();
const eventsModel = require('../../models/events.model.js');
const { checkToken } = require('../../helpers/middlewares.js');

router.get('/', async (req, res) => {

    try {
        const [result] = await eventsModel.getAll()

        res.json(result)

    } catch (error) {

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



module.exports = router;