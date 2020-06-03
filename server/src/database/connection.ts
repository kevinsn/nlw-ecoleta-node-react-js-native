import knex from 'knex';
import path from 'path';

// __dirname = retorna o caminho onde está sendo executado

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    }
});

export default connection;

