const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// API endpoints
app.post('/toggle_esp', (req, res) => {
    // Handle toggling ESP on backend
    res.json({ status: 'ESP Toggled' });
});

app.post('/toggle_aimbot', (req, res) => {
    // Handle toggling Aimbot on backend
    res.json({ status: 'Aimbot Toggled' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
