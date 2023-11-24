const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','views')

const indexRoute = require('./routes/index');
const errorController = require('./controllers/error');

app.use(indexRoute);
app.use(errorController.notFound);


app.listen(3000,()=>{
    console.log("running")
})