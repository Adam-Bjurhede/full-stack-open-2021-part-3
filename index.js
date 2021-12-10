//NPM
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//Models
const Person = require('./models/person');
//helpers
const errorHandler = require('./middleware/errorHandler');

const app = express();

//Middleware
app.use(express.static('build'));
app.use(express.json());
app.use(cors());
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

//Get all persons
app.get('/api/persons', (request, response) => {
	Person.find({})
		.then((persons) => {
			response.json(persons);
		})
		.catch((error) => console.log(error));
});

//Get one person
app.get('/api/persons/:id', (request, response, next) => {
	const id = request.params.id;

	Person.findById(id)
		.then((person) => {
			if (person) {
				response.status(200).json(person);
			} else {
				response.status(404).end();
			}
		})
		.catch((error) => next(error));
});

//Delete person
app.delete('/api/persons/:id', (request, response, next) => {
	const id = request.params.id;

	Person.findByIdAndRemove(id)
		.then((result) => {
			response.status(204).end();
		})
		.catch((error) => next(error));
});

//Add new person
app.post('/api/persons', (request, response, next) => {
	const newPerson = request.body;

	const person = new Person(newPerson);

	person
		.save()
		.then((savedPerson) => {
			console.log(savedPerson);
			response.json(savedPerson);
		})
		.catch((error) => next(error));
});

//Update person
app.put('/api/persons/:id', (request, response, next) => {
	const id = request.params.id;
	const newPerson = request.body;

	Person.findByIdAndUpdate(id, newPerson, { new: true, runValidators: true })
		.then((updatedPerson) => {
			response.json(updatedPerson);
		})
		.catch((error) => next(error));
});

//Get Info
app.get('/info', (request, response, next) => {
	const date = new Date();

	Person.count({})
		.then((count) => {
			response.send(`<p>Phonebook has info for ${count} people</p>
		<p>${date}</p>`);
		})
		.catch((error) => next(error));
});

app.use(errorHandler);

//Port
const PORT = process.env.PORT || 3001;
//Start server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
