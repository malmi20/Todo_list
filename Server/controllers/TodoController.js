const Todo = require('../models/Todo')
const mongoose = require ('mongoose')

//get all todos
const getTodos = async(req, res) => {
    const todos = await Todo.find({})

    return res.status(200).json(todos)
}


//add a todo
const createTodo = async(req, res) =>{
    const task = req.body.task;

   try { 
      const todo = await Todo.create({task: task})
      res.status(200).json(todo)
}catch(error){
      res.status(400).json({error: error.message})
}

}

//update a todo
const updateTodo = async(req, res)=>{
    const {id} = req.params
    const todoItem = await Todo.findById(id);

    console.log("Todoitem", JSON.stringify(todoItem))

    const todo = await Todo.findByIdAndUpdate({_id: id}, {done: !todoItem.done})

    if(!todo){
       
        return res.status(400).json({error: "no such todo"})
    }

    return res.status(200).json(todo)
}

//delete a todo
const deleteTodo = async(req, res) =>{
    const{id} = req.params

    const todo = await Todo.findOneAndDelete({_id: id})

    if(!todo){
        return res.status(400).json({error: "no such todo"})
    }

    return res.status(200).json(todo)
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}