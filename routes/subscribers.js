const express = require('express')
const subscriberController = require('../controllers/subscriber')
const router = express.Router()
const {getSubscriber} = require("../services/subscriber")


router.get('/', subscriberController.get)

router.get('/:id', getSubscriber, subscriberController.getOne)

router.post('/', subscriberController.createOne)

router.patch('/:id', getSubscriber, subscriberController.updateOne)

router.delete('/:id', getSubscriber, subscriberController.deleteOne)



module.exports = router