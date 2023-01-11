const express = require('express');
const app = express();
const db = require('./utils/database');
const initModels = require('./models/init.model');
const Users = require('./models/users.models');
const Todos = require('./models/todos.models');

const PORT = 8000;
app.use(express.json());
db.authenticate()
.then(() => console.log('autenticacion correecta'))
.catch((error) => console.log(error));

initModels();
db.sync({force: false})
.then(() => console.log('base de datos sync'))
.catch((error) => console.log(error))
app.get('/', (req, res) => {
    res.status(200).json({message:"biernvenido al servidor"})

});
app.get('/users', async (req, res) => {

    try {
        const result =  await Users.findAll();
        res.status(200).json(result);
        } catch (error) {
        console.log(error)
    }

});

app.get('/todos', async (req, res) => {

    try {
        const result =  await Todos.findAll();
        res.status(200).json(result);
        } catch (error) {
        console.log(error)
    }

});

app.get('/users/:id', async (req, res) => {
   try {
    const {id} = req.params;
    const result = await Users.findByPk(id)
    res.status(200).json(result);
   } catch (error) {
    console.log(error)
   }

}) ;


app.get('/todos/:id', async (req, res) => {
    try {
     const {id} = req.params;
     const result = await Todos.findByPk(id)
     res.status(200).json(result);
    } catch (error) {
     console.log(error)
    }
 
 }) ;
app.get('/users/username/:username', async(req, res) => {
    try {
        const {username} = req.params;
        const result = await Users.findOne({where: {username}});
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }

});
app.post("/users", async(req, res) => {
try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
} catch (error) {
    res.status(400).json('not found')
    console.log(error);
}
});

app.post("/todos", async(req, res) => {
    try {
        const user = req.body;
        const result = await Todos.create(user);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json('not found')
        console.log(error);
    }
    });

app.put('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {password} = req.body;
             const result = Users.update({password}, {
            where: {id}
        });
        res.status(200).json(result); 
        
    } catch (error) {
        res.status(400).json('not found')
        console.log(error);
    }
});

app.put('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {isComplete} = req.body;
             const result = Todos.update({isComplete}, {
            where: {id}
        });
        res.status(200).json(result); 
        
    } catch (error) {
        res.status(400).json('not found')
        console.log(error);
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Users.destroy({
            where: {id},
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json('not found')
        console.log(error);
    }
});

app.delete("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Todos.destroy({
            where: {id},
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json('not found')
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`servidor corriendo en el pu8erto ${PORT}`)
});

