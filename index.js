const express = require('express');
const app = express();
const secret_word= 'secret, you are not allowed to open'
const port = 50000

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send(`Hello world,${secret_word}!`);
});

// Start the server and listen on port 50000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
