const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('build'));

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let phonebook = [
	{
		id: 1,
		name: 'Arto Hellas',
		number: '040-123456',
	},
	{
		id: 2,
		name: 'Ada Lovelace',
		number: '39-44-5323523',
	},
	{
		id: 3,
		name: 'Dan Abramov',
		number: '12-43-234345',
	},
	{
		id: 4,
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
	},
];

//Get all persons
app.get('/api/persons', (request, response) => {
	response.json(phonebook);
});

//Get one person
app.get('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);

	const person = phonebook.find((person) => person.id === id);

	if (!person) {
		return response.status(404).json({ success: false, message: 'No person was found' });
	}

	response.status(200).json(person);
});

//Delete person
app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);

	phonebook = phonebook.filter((person) => person.id !== id);

	response.status(204).end();
});

//Add new entrie
app.post('/api/persons', (request, response) => {
	const newPerson = request.body;

	if (!newPerson.name || !newPerson.number) {
		return response.status(400).json({ error: 'Both name and number has to be present' });
	}

	const personExist = phonebook.find((person) => person.name.toLowerCase() === newPerson.name.toLowerCase());

	if (personExist) {
		return response.status(400).json({ error: 'Name must be unique' });
	}

	newPerson.id = Math.round(Math.random() * 10000);

	phonebook = phonebook.concat(newPerson);

	response.status(200).json(newPerson);
});

//Get Info
app.get('/info', (request, response) => {
	const date = new Date();

	response.send(`<p>Phonebook has info for ${phonebook.length} people</p>
	<p>${date}</p>
	
	`);
});

//Port
const PORT = process.env.PORT || 3001;
//Start server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
