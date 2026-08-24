const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.post('/collect', (req, res) => {
    const data = JSON.stringify(req.body) + '\n';
    fs.appendFileSync('tokens.log', data);
    console.log('Received:', data);
    res.send('OK');
});

app.get('/', (req, res) => res.send('Server is ready'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Running on port ' + PORT));