const express = require('express');
const config = require('./config');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static('public'));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(config.port, function listenHandler(){
    console.info(`Server running on port : ${config.port}`);
});



