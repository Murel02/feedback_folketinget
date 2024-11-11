const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const politikerRoutes = require('./routes/PolitikerRoutes')

const app = express();
const PORT = 3000;

app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/politikere",{connectTimeoutMS: 10000})
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error('MongoDB connection error', err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', politikerRoutes);


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}/`);
});