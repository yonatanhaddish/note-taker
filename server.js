const express= require('express');
const app= express();

const { db } = require('./data/db.json');

app.get('/api/db', (req, res) => {
    res.send('Hello!');
});

app.listen(3000, () => {
    console.log(`API server now on port 3000!`);
});