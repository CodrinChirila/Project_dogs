const dotenv = require('dotenv').config()
const {USER_NAME, USER_KEY, PORT, DATABASE} = process.env
const env_name = USER_NAME ?? "Wrong USER_NAME";
const env_pass = USER_KEY ?? "Wrong USER_KEY"
const env_port = PORT
const env_database = DATABASE

const pgp = require('pg-promise')({})
const db = pgp(`postgres://${env_name}:${env_pass}@localhost:${env_port}/${env_database}`)


const getBreeds = async (req, res) => {
	const { limit, page } = req.query
	const sortedBreeds = []

	await db.many('SELECT * FROM breeds')
		.then((result) => {
			result?.forEach(elem => sortedBreeds.push(elem))
		}).catch((err) => {
			console.log(err);
			res.send(err)
		})

	if (!limit && !page) res.status(200).json({ success: true, data: sortedBreeds })
	else {
	const offset = Number(page) * Number(limit);
	const result = limit ? 
				(page ? sortedBreeds.slice(offset,offset+Number(limit)) : sortedBreeds.slice(0,Number(limit)))
				: ((Number(page) == 0)? sortedBreeds : 'No dogs on this page')
	res.status(200).json({ success: true, data: result })
	}
}

// const getBreeds = async (req,res) => {
// 	const {limit, page} = req.query;
// 	const sortedBreeds = [];

// 	await db.many('SELECT * FROM breeds')
// 	.then((result) => result?.forEach(elem => sortedBreeds.push(elem)))
// 	.catch((err) => {
// 		console.log(err);
// 		res.send(err)
// 	})

// 	const semanticPage = page ?? 1
// 	const result = limit ? sortedBreeds.slice(limit * (semanticPage - 1), limit * semanticPage ) : (!page && !limit? sortedBreeds: null)
// 	console.log(page, limit)
// 	res.status(200).json({ success: true, data: result })
// }


const getaDog = async (req, res) => {
	const { q } = req.query
	console.log(req.query)
	let specNameDog = []

	await db.many('SELECT * FROM breeds')
		.then((result) => {
			result?.forEach(elem => specNameDog.push(elem))
		}).catch((err) => {
			console.log(err);
			res.send(err)
		})

	if (q) {
		specNameDog = specNameDog.filter((dog) => {
			return dog.name.toLowerCase().includes(q.toLowerCase())
		})
	}
	if (specNameDog < 1) {
		res.status(200).send('no Dog name matched your search')
		return res.status(200).json({ success: true, data: [] })
	}

	//console.log(specNameDog)
	
	//var count = []
	//specNameDog.forEach(elem => count.push(elem.image.url))
	// for (let i = 0; i < specNameDog.length; i++) {
	// 	count[i] = specNameDog[i].image.url
	// } 
	//console.log(count)
	
	res.status(200).send(specNameDog)
}



module.exports = {
	getBreeds,
	getaDog
}