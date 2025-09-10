// server.js

const express = require('express');
const app = express();

// Serve static files if any (optional)
// app.use(express.static('public'));

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from Render! Your Node.js server is running.');
});

// Use Render's PORT environment variable or default 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
