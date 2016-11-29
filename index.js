const path = require("path"),
	turtleio = require("turtle.io"),
	server = turtleio({
		port: 8000,
		default: "localhost",
		root: path.join(__dirname),
		hosts: {
			localhost: "www"
		},
		logging: {
			enabled: true,
			level: "info"
		}
	});

server.start();
