var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const cors = require('cors');
const randomInsult = require('../helpers/generateInsult');

const app = express();
const getWordsFromPlay = require('../helpers/getFolgerText');


app.use(express.static(path.join(__dirname, '../public/dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/insult', (req, res) => {
  console.log('inside the get request handler', randomInsult)
  res.status(200).json(randomInsult);
})

var PORT = 3008 || process.env.PORT

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
})

