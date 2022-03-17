const axios = require('axios')
const dotenv = require('dotenv').config()
const { v4 } = require('uuid')

const {USER_NAME, USER_KEY, PORT, DATABASE} = process.env
const env_name = USER_NAME ?? "Wrong USER_NAME";
const env_pass = USER_KEY ?? "Wrong USER_KEY"
const env_port = PORT
const env_database = DATABASE

const pgp = require('pg-promise')({})
const db = pgp(`postgres://${env_name}:${env_pass}@localhost:${env_port}/${env_database}`)


//db.none('DELETE FROM breeds');
db.none('DROP TABLE breeds')
	.then(() => {
		db.none('CREATE TABLE breeds(id UUID NOT NULL PRIMARY KEY,name VARCHAR(130) NOT NULL,temperament VARCHAR(255),life_span VARCHAR(30),origin VARCHAR(60),country_code VARCHAR(10))')
	}).catch((err) => {
		console.log('ERROR: ', err)
	})



// db.one('INSERT INTO breeds(name,temperament,life_span) VALUES',  ['Codrin', 'calm',  '39'])
//   .then((data) => {
//     console.log('DATA:', data.value)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })


axios.get('https://api.thedogapi.com/v1/breeds')
	.then(res => {
		const allBreeds = res.data;
		const breedsMapped = allBreeds.map(breed => {
			const {id, name, temperament, life_span, origin, weight, height, country_code} = breed;
			return (
			{ 
				name, 
		 		temperament, 
				life_span,
				origin,
				weight,
				height,
				country_code
			})
		})
		breedsMapped.forEach((elem) => {
			const cs = new pgp.helpers.ColumnSet([
				'id',
				'name', 
				'temperament', 
				'life_span', 
				'origin',
				'country_code'], {table: 'breeds'}
			);
			const values = [{
				id: v4(), 
				name: elem.name, 
				temperament: elem.temperament, 
				life_span: elem.life_span,
				origin: elem.origin,
				country_code: elem.country_code
			}];
			const query = pgp.helpers.insert(values, cs);
			db.none(query);
		})	
	})



//const cs = new pgp.helpers.ColumnSet(['id','name', 'temperament', 'life_span'], {table: 'breeds'});
    
// data input values:
//const values = [{id: v4() , name: 'a1', temperament: 'b1', life_span: 'c1'}, {id:v4(), name: 'a2', temperament: 'b2', life_span: 'c2'}];
    
// generating a multi-row insert query:
//const query = pgp.helpers.insert(values, cs);
//=> INSERT INTO "tmp"("col_a","col_b") VALUES('a1','b1'),('a2','b2')
    
// executing the query:
//db.none(query);
