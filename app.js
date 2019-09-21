const express = require('express')
const fs = require('fs')
const app = express()
const port = 80
var jsonData

fs.readFile('bea.json', 'utf8', function(err, data) {
    if (err) throw err;
    jsonData = data
});

app.get('/', (req, res) => res.send({ jsonData}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))