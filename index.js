const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change the port number

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});