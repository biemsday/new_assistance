const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/routes/index.html'))
});

app.use(express.static(path.join(__dirname, '/')))

// app.get('/basova_yana', function(req, res) {
//     res.sendFile(path.join(__dirname + '/basova_yana/index.html'))
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));