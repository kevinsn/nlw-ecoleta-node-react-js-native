import express from 'express';

const app = express();

app.use(express.json());

const users = [
    'Daniel',
    'Cleiton',
    'Robson',
    'Danilo'
]

app.get('/', (request,response) =>{
    
});

app.listen(3333);