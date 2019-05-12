var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const cors = require('cors');


const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')))

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(cors());


// app.get('/shakes/', (req, res) => {
  
// })

var PORT = 3008 || process.env.PORT

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
})

