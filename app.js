const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine','ejs');
app.set('views','views')

const indexRoute = require('./routes/index');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(indexRoute);
app.use(errorController.notFound);


app.listen(3000,()=>{
    console.log("running")
})