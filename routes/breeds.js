const express = require('express')
const router = express.Router()

const {
	getBreeds,
	getaDog
} = require('../controllers/breeds')

router.route('/').get(getBreeds)
router.route('/search').get(getaDog)

module.exports = router