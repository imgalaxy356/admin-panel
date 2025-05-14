const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body parser middleware to parse JSON
app.use(bodyParser.json());

// In-memory storage for settings (could be replaced with a database)
let settings = {};

// POST endpoint to save all settings (including ESP and aimbot options)
app.post('/saveSettings', (req, res) => {
    settings = req.body;  // Save all settings received in the request
    console.log("Settings saved:", settings);

    // Send a success response
    res.json({ success: true, message: 'Settings saved successfully' });
});

// GET endpoint to fetch settings
app.get('/getSettings', (req, res) => {
    res.json(settings);  // Return the current settings
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
