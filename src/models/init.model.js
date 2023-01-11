const Users = require('./users.models');
const Todos = require('./todos.models');
const Categories = require('./categories.models');
const TodosCategories = require('./todos-categories');

const initModels = () => {
Todos.belongsTo(Users, {as: "author", foreignKey: "user_id"});
Users.hasMany(Todos, {as: "tasks", foreignKey: "user_id"});

TodosCategories.belongsTo(Todos, {as: "tasks", foreignKey: "todo_id"});
Todos.hasMany(TodosCategories, {as: "category", foreignKey: "todo_id"});

TodosCategories.belongsTo(Categories, {as: "category", foreignKey: "category_id"});
Categories.belongsTo(TodosCategories, {as: "taks", foreignKey: "category_id"});
};

module.exports = initModels