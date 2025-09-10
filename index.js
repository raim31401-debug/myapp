// Import express
const express = require('express');
const app = express();

// Middleware (optional: for parsing JSON)
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('HELLO Manju rai, Your server is running.');
});

// Example API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'This is an API response ✅' });
});

// Use Render's dynamic port OR fallback to 3000 for local dev
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
