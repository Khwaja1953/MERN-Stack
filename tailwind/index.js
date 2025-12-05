const express = require('express');
const path = require('path');
const app = express();

// Serve static assets (HTML, CSS, JS) from src
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
});