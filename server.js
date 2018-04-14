//@ts-check
'use strict';
const express = require('express');
const app = express();
const path = require('path');
const port = process.argv[2] || 8800;

app.use(express.static(__dirname));
app.use('/static', express.static(__dirname));


app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }));


app.listen(port, () => console.log('Reverse pacman running on port: ' + port));