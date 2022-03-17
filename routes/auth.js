const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	const { name } = req.header;
	if (name ) {

	}
	res.status(401).send('Please Provide Credentials')
})

module.exports = router;