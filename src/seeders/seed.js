const Todos = require("../models/todos.models");
const Users = require("../models/users.models");
const db = require("../utils/database");

const users = [
    {
    username: "johndoe",
        email: "johndoe@example.com",
        password: "P@ssw0rd"
    },
    {
        username: "janedoe",
        email: "janedoe@example.com",
        password: "P@ssw0rd123"
    },
    {
        username: "bobsmith",
        email: "bobsmith@example.com",
        password: "mypassword"
    }
];

const todos = [
    {
        title: "Comprar pan",
        description: "Comprar una barra de pan de centeno en el panadero de la esquina",
        userId: 1
    },
     { title: "Enviar correo electrónico a jefe", 
     description: "Enviar un correo electrónico al jefe con el informe semanal",
     userId: 2
     },
      {
        title: "Llevar el coche al taller",
         description: "Llevar el coche al taller para que lo revise el mecánico",
        userId: 3
    }];

const categories = [];

const todosCategories = [];

db.sync({force: false})
.then(() => {
    console.log('iniciando con el sembradio')
    users.forEach((user) => Users.create(user));
    setTimeout(() =>{
   todos.forEach((todo) => Todos.create(todo));
    }, 100)
})
.catch((error) => console.log(error));