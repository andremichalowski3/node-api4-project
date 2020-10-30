const server = require('./api/server.js');

const PORT = 3000; //create a port
server.listen(PORT, () => { //listen for incoming requests
	console.log(`LISTENING ON PORT ${PORT}`)
})