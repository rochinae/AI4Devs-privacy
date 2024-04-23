const express = require('express');
const app = express();
const port = 3000;

// Endpoint POST /anonymize
app.post('/anonymize', (req, res) => {
    const message = req.body.message;
    const anonymizedMessage = anonimizar(message);
    res.json({ anonymizedMessage });
});

// Endpoint POST /deanonymize
app.post('/deanonymize', (req, res) => {
    const message = req.body.message;
    const deanonymizedMessage = desanonimizar(message);
    res.json({ deanonymizedMessage });
});
// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
