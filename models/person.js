const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI;

mongoose
	.connect(url)
	.then((result) => {
		console.log('Connected to MOngoDB');
	})
	.catch((error) => {
		console.log('error connectiong to mongoDB', error.message);
	});

const personSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: [3, 'To short name'],
		unique: true,
	},
	number: {
		type: String,
		minLength: [8, 'Too short number'],
		required: true,
	},
});

personSchema.plugin(uniqueValidator, { message: 'Must be unique' });

personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('Person', personSchema);
