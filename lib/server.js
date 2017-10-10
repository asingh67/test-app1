import express from 'express';
import config from './config';
import exphbs from 'express-handlebars';
import serverRender from './serverRender';
const app = express();

app.use(express.static('public'));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', (req, res)=>{
    const initialContent = serverRender();
    res.render('index',{ title : 'Express, handlebars',
        initialContent: initialContent
    });
});

app.listen(config.port, function listenHandler(){
    console.info(`Server running on port : ${config.port}`);
});



