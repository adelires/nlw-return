<!-- <p align="center">
    <img alt="" src="./.github/capa.png"/>
</p> -->

<h1 align="center">Feedback Widget 💬</h1>


<p align="center">
   <a href="#computer-projeto"> Projeto</a>
   &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#test_tube-tecnologias">Tecnologias</a>
   &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando">Como executar</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

 <img src="https://img.shields.io/static/v1?label=NLW Return&message=08&color=8257E5&labelColor=000000" alt="NLW 08" />
</p>

<p align="center">
  <img alt="Feedback Widget" src=".github/capa.png" width="100%">
</p>

## :computer: Projeto
<p>
Projeto desenvolvido na Trilha Impulse do NLW Return.
Esse projeto é um widget que pode ser usado em aplicações web e mobile para receber feedback de usuários.
</p>

## :test_tube: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

#### Site WEB

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Headless UI](https://headlessui.dev/)
- [Phosphor Icons](https://phosphoricons.com/)
- [html2canvas](https://html2canvas.hertzen.com/)
- [tailwindcss](https://tailwindcss.com/)

#### API

- [Node](https://nodejs.org/)
- [Nodemailer](https://nodemailer.com/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [Mailtrap](https://mailtrap.io/)
- [Jest](https://jestjs.io/pt-BR/)

### Aplicativo móvel
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Phosphor Icons](https://phosphoricons.com/)

## :rocket: Como executar

```bash
# Clone o Repositório
$ git clone https://github.com/adelires/nlw-return.git

# Acesse a pasta do projeto
$ cd nlw-return
```

### Executando Aplicação Web

```bash
# Acesse a pasta da aplicação web
$ cd web

# Baixe as dependendências
$ npm install

#Crie o arquivo .env.local e preencha os campos abaixo
VITE_API_URL=http://localhost:3333

# Execute
$ npm run dev
```

### Executando API

```bash
# Acesse a pasta da aplicação web
$ cd server

# Baixe as dependendências
$ npm install

#Crie o arquivo .env e preencha os campos abaixo
DATABASE_URL="file:./dev.db"
NODEMAIL_USER= User Inbox Mailtrap 
NODEMAIL_PASS= Pass Inbox Mailtrap

# Execute
$ npm run dev
```

### Executando Aplicativo móvel

```bash

# Acesse a pasta da aplicação web
$ cd mobile

# Baixe as dependendências
$ npm install

# Execute
$ npm run start

```
Acesse <http://localhost:3000> para ver a aplicação Web.

## :memo: Licença

Este projeto está sob a licença [MIT](./LICENSE).

---