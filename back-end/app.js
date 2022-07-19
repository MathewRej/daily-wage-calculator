const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/user', require('./routes/user'))
app.use('/api/work', require('./routes/work'))

app.listen(4000, ()=> console.log("server started"));
