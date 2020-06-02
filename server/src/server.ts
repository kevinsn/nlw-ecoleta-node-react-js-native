import express from 'express';

const app = express();

app.use(express.json());

// Rotas: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando os sistemas

// Requisições:
// GET - buscar uma ou mais requisições no backend
// POST - criar uma nova informações no backend
// PUT - atualizar uma informação existente no backend
// DELETE - excluir alguma infomração do backend
// Request param: parâmtros que vem na própria rotaque identifica um recurso
// Query param: parâmetros geralmente opcionais para filtros de páginação
// Request body: parâmetros para criação de atualização de informações. Ex. senha, dados do usuário etc.

const users = [
    'Daniel',
    'Cleiton',
    'Robson',
    'Danilo'
]

app.get('/users', (request,response) =>{

    const search = String(request.query.search)

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    // console.log('Listagem de usuários');

    console.log(search);  
    
    response.json(filteredUsers);
});

app.get('/users/:id', (request,response) =>{
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request,response) =>{

    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user);

});

app.listen(3333);