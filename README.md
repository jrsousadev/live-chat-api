## πΊ Live chat project API using mongodb, nodejs, prisma, supertest and jest

API Desenvolvida para ser consumida no live-chat-web

## O que foi utilizado no projeto

- [x] Typescript
- [x] Express
- [x] MongoDB
- [x] Mocks
- [x] Supertest
- [x] Jest
- [x] Prisma
- [x] Nodejs

### Regras de negΓ³cio

- [x] Create message
- [x] Get message
- [x] Get last message by chat
- [x] Get all messages by chat
- [x] Delete all messages
- [x] Create chat
- [x] Create group chat
- [x] Get all chats by user
- [x] Get chat
- [x] Create user
- [x] Get user

### Endpoints Message

- [x] [POST] "/api/message"
- [x] [GET] "/api/message/chat/:chatId"
- [x] [GET] "/api/message/lastMessage/:chatId"
- [x] [GET] "/api/message/:id"
- [x] [DELETE] "/api/message/all"

### Endpoints Chat:

- [x] [POST] "/api/chat"
- [x] [POST] "/api/chat/group"
- [x] [GET] "/api/chat/user/:userId"
- [x] [GET] "/api/chat/:id"

### Endpoints Use:

- [x] [POST] "/api/user"
- [x] [GET] "/api/user/:id"

### Arquitetura do Projeto

```
.
βββ prisma
βββ src/
β   βββ app
β     βββ modules
β     βββ repositories
β     βββ utils
β     βββ shared
β       βββ errors
β       βββ routes
β       βββ app.ts
β       βββ server.ts
β       βββ websocket.ts
β   βββ config
β   βββ database
β   βββ domain
β     βββ entities
βββ tests/
β   βββ _database
β   βββ _modules
β   βββ _repositories
β   βββ _seed
βββ ...
```

### Iniciando o Projeto

- Clone o repositΓ³rio e instale as dependΓͺncias.
```sh
# install dependencies
> npm i

# copy .env file
> cp .env.example .env

# Generating mongoDB with prisma models
> npm prisma generate

# Init tests
> npm run test

# start project
> npm run dev

# open in
http://localhost:8080/
```
