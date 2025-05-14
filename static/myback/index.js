const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // allow frontend cross-origin access
app.use(express.json()); // parse JSON bodies

// Simulate memory-backed settings (you can later hook this to real memory or files)
let settings = {
  aimbot: false,
  esp: false,
  radar: false,
  colors: {
    boxVisible: '#FF0000',
    boxHidden: '#0000FF',
    skeletonVisible: '#00FF00',
  }
};

// ---- WEB HANDLER ----
app.get('/webmenu', (req, res) => {
  res.json({
    success: true,
    settings
  });
});

// ---- TOGGLE HANDLER ----
app.post('/toggle', (req, res) => {
  const { feature, value } = req.body;

  if (feature in settings) {
    settings[feature] = value;
    return res.json({ success: true, updated: { [feature]: value } });
  }

  res.status(400).json({ success: false, message: 'Invalid feature' });
});

// ---- COLOR HANDLER ----
app.post('/color', (req, res) => {
  const { type, color } = req.body;

  if (settings.colors.hasOwnProperty(type)) {
    settings.colors[type] = color;
    return res.json({ success: true, updated: { [type]: color } });
  }

  res.status(400).json({ success: false, message: 'Invalid color type' });
});

// ---- START SERVER ----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Web menu backend running on port ${PORT}`));
