const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const {connectDB}=require('./db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
connectDB();
const PORT = process.env.PORT || 5000;
const buses=require('./buses/index');


app.get('/', (req, res) => {
	res.json({ status: 200, message: 'API is running perfectly' });
});

app.use('/api/buses',buses);

app.get('/buses', (req, res) => {
	let data = [
		{
			id: 'e387430be100080',
			cost: 200,
		},
		{
			id: '6c572123cee20400',
			cost: 500,
		},
		{
			id: '5fbfc0ca9399c000',
			cost: 800,
		},
		{
			id: '2309ab53d1754000',
			cost: 300,
		},
		{
			id: '51014c24b723d800',
			cost: 200,
		},
		{
			id: '73c392a7a1819c00',
			cost: 400,
		},
		{
			id: '3a3cb8231c932800',
			cost: 1000,
		},
	];

	res.json({ status: 200, data, message: 'API call successfull' });
});

app.get('/trains', (req, res) => {
	let data = [
		{
			id: 'e387430be100080',
			cost: 200,
		},
		{
			id: '6c572123cee20400',
			cost: 500,
		},
		{
			id: '5fbfc0ca9399c000',
			cost: 800,
		},
		{
			id: '2309ab53d1754000',
			cost: 300,
		},
		{
			id: '51014c24b723d800',
			cost: 200,
		},
		{
			id: '73c392a7a1819c00',
			cost: 400,
		},
		{
			id: '3a3cb8231c932800',
			cost: 1000,
		},
	];

	res.json({ status: 200, data, message: 'API call successfull' });
});

app.get('/planes', (req, res) => {
	let data = [
		{
			id: 'e387430be100080',
			cost: 200,
		},
		{
			id: '6c572123cee20400',
			cost: 500,
		},
		{
			id: '5fbfc0ca9399c000',
			cost: 800,
		},
		{
			id: '2309ab53d1754000',
			cost: 300,
		},
		{
			id: '51014c24b723d800',
			cost: 200,
		},
		{
			id: '73c392a7a1819c00',
			cost: 400,
		},
		{
			id: '3a3cb8231c932800',
			cost: 1000,
		},
	];

	res.json({ status: 200, data, message: 'API call successfull' });
});

app.get('/cars', (req, res) => {
	let data = [
		{
			id: 'e387430be100080',
			cost: 200,
		},
		{
			id: '6c572123cee20400',
			cost: 500,
		},
		{
			id: '5fbfc0ca9399c000',
			cost: 800,
		},
		{
			id: '2309ab53d1754000',
			cost: 300,
		},
		{
			id: '51014c24b723d800',
			cost: 200,
		},
		{
			id: '73c392a7a1819c00',
			cost: 400,
		},
		{
			id: '3a3cb8231c932800',
			cost: 1000,
		},
	];

	res.json({ status: 200, data, message: 'API call successfull' });
});

app.post('*', (req, res) => {
	console.log(req.body);

	res.json({
		status: 200,
		message: 'Your response is submitted successfully',
	});
});

app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
});
