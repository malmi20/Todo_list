const express = require('express')
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo } = require('../controllers/TodoController')

const router = express.Router()

//get all todos
router.get('/get', getTodos)

//add a todo
router.post('/add',createTodo )

//update a todo
router.put('/update/:id', updateTodo)

//delete a todo
router.delete('/delete/:id',deleteTodo)

module.exports = router
