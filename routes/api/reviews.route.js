const router = require('express').Router();
const { checkToken } = require('../../helpers/middlewares.js');
const reviewsModel = require('../../models/reviews.model');

router.get('/:idRoute', async (req, res) => {
    try {
        const [result] = await reviewsModel.getById(req.params.idRoute)
        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
})


router.post('/:idRoute/new', checkToken, async (req, res) => {

    req.body.iduser = req.user.id;
    req.body.idRoute = req.params.idRoute

    try {
        const [result] = await reviewsModel.create(req.body, req.params.idRoute)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})
module.exports = router;
