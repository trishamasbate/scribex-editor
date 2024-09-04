// Import the express module
const express = require('express');
// Import the path module
const path = require('path');

// Create an instance of an Express application
const app = express();
// Define the port to listen on, using the environment variable PORT if available, otherwise default to 3000
const PORT = process.env.PORT || 3000;

// Serve static assets from the client/dist folder
app.use(express.static(path.join(__dirname, '../client/dist')));
// Middleware to parse URL-encoded data with the querystring library (extended: true)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON data
app.use(express.json());

// Define routes by requiring and invoking the htmlRoutes module, passing the app instance
require('./routes/htmlRoutes')(app);

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));