import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));

app.listen(config.port, function listenHandler(){
    console.info('Server running on port : ${config.port} ');
});



