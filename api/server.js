const express = require('express'); //import
const server = express(); //instantiate
// server.use(express.json()); //configure

server.get('/', (req, res) => {
	res.send(`Lambda test endpoint from server`); //test endpoint
})

module.exports = server; //export