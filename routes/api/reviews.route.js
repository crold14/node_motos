const router = require('express').Router();
const { checkToken } = require('../../helpers/middlewares.js');
const reviewsModel = require('../../models/reviews.model');

router.get('/', async (req, res) => {
    try {
        const [result] = await reviewsModel.getAll()
        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
})
router.get('/:reviewsId', async (req, res) => {
    try {
        const [result] = await reviewsModel.getById(req.params.reviewsId)
        res.json(result[0])

    } catch (error) {
        res.json(error)
    }

});
router.post('/new', checkToken, async (req, res) => {
    console.log(req.user);
    req.body.iduser = req.user.id;
    try {
        const [result] = await reviewsModel.create(req.body)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})
module.exports = router;
