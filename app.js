const express = require('express')
const app = express()

const { dogs } = require('./dataDogs')
const breeds = require('./routes/breeds')


app.use('/v1/breeds', breeds)
//app.use('/v1/breeds/search', breeds)


app.listen(5000, () => {
	console.log('Server is listening on port 5000..')
})




