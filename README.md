Sobre
====
Api desenvolvida em Nodejs com: express (Framework HTTP), typescript, sequelize (ORM), sqlite3 (Banco);
O banco é armazenado no arquivo `database.sqlite`, que será criado automaticamente na primeira execução do sistema, na pasta raiz do projeto.

Como inicializar
====
Docker: 
```
docker-compose -f docker-compose-dev.yml up
```

NPM:
```
npm run dev
```

Endpoints
====
- Listagem: 
    - [GET] http://localhost:3001/veiculo
- Visualização: 
    - [GET] http://localhost:3001/veiculo/:id
- Cadastro: 
    - [POST] http://localhost:3001/veiculo/create

- Payload:
    ```
    {
        "nome": "Carro",
        "marca": "Fiat",
        "modelo": "Uno",
        "foto": ""
    }
    ```

- Atualização:
    - [PUT] http://localhost:3001/veiculo/:id/update

- Exclusão: 
    - [DELETE] http://localhost:3001/veiculo/:id

Obs: infelizmente não tive tempo para finalizar o projeto.
