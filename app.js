const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/api/api-key', (req, res) => {
	console.log("process.env.API_KEY: ", process.env.API_KEY);
	res.send({API_KEY: process.env.API_KEY});
})

app.listen(port);