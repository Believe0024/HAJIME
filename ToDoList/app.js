const express = require('express');
const app = express();
const PORT = 3500;

app.use(express.json()); 

const todos = []; // In-memory storage for todos items

//create todo list
app.post("/createtodos", (req, res) => {
    const { title, description } = req.body;
 
 const newTodo = {
    id: Date.now(),
    title,
    description,
    completed: false
 };

 todos.push(newTodo);

    res.status(201).json(newTodo);
});


//get all todo list
app.get("/getalltodos", (req, res) => {
     res.json(todos);
});







// //get a single todo item by id
// app.get("/todos/:id", (req, res) => {
//     const todoId = parseInt(req.params.id);
//     const todo = todos.find((t) => t.id === todoId);
// });



// //update a todo item by id
// app.put("/createtodos/:id", (req, res) => {
//     const todoId = parseInt(req.params.id);
//     const { title, description, completed } = req.body;

//     const todo = todos.find((t) => t.id === todoId);

//     if (!todo) {
//         return res.status(404).json({ error: "Todo not found" });
//     }

//     todo.title = title;
//     todo.description = description;
//     todo.completed = completed;

//     res.json(todo);
// });

// //delete a todo item by id
// app.delete("/createtodos/:id", (req, res) => {
//     const todoId = parseInt(req.params.id);
//     const todoIndex = todos.findIndex((t) => t.id === todoId);
//     if (todoIndex === -1) {

// return res.status(404).json({ error: "Todo not found" });
// }

// todos.splice(todoIndex, 1);
// res.json({ message: "Todo deleted successfully" });
// });





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});