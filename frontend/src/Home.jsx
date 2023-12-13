import { useEffect, useState } from 'react';
import Create from './components/Create';
import TodoItem from './components/TodoItem';
import axios from 'axios';



function Home() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/todoRoutes/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])

    const fetchTodos = ()=>{
        axios.get('http://localhost:3001/api/todoRoutes/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err));
    }

    const handleEdit = (id) => {
        axios.put(`http://localhost:3001/api/todoRoutes/update/${id}`)
            .then(result => {
                console.log(result);
                // Assuming you want to update the UI after a successful edit
                fetchTodos();
            })
            .catch(err => {
                console.log('Error while updating todo:', err);
            });
    }
    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/todoRoutes/delete/${id}`)
            .then(() => {
                fetchTodos();
            })
            .catch(err => {
                console.log('Error while deleting todo:', err);
            });
    }

    return (
        <div className='home'>
            <h2>Todo List</h2>
            <Create fetchTodos={fetchTodos} />
            {
                todos.length === 0
                ?
                <div><h3>No Records</h3></div>
                :
                todos.map((todo, index) => (
                    <TodoItem key={index} handleEdit ={handleEdit} handleDelete={handleDelete}  todo={todo} />
                ))
            }
        </div>
    );
}

export default Home;
