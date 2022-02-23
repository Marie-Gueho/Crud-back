const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const router = require('./app/router');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors({
	"origin": "http://localhost:3000",
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
	"preflightContinue": false,
	"optionsSuccessStatus": 204,
	"exposedHeaders": 'Authorization',
}));

app.use(router);

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})