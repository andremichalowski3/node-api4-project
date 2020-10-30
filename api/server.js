const express = require('express'); //import
const server = express(); //instantiate
// server.use(express.json()); //configure

server.get('/', (req, res) => {
  res.status(200).json({
		hello: "node 34",
		environment: process.env.NODE_ENV
	})
})

module.exports = server; //export