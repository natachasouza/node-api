const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//server start
const app = express();
app.use(express.json());
app.use(cors());

//db start
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models');

//routes
app.use('/api', require('./src/routes'));

//server run
app.listen(3001);