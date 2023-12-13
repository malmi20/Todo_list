import { useState } from 'react'
import PropTypes from "prop-types";
import axios from 'axios'

function Create({fetchTodos}) {

    const [task, setTask] = useState()

    const handleAdd = () =>{
        axios.post('http://localhost:3001/api/todoRoutes/add', {task: task})
        .then(() => {
          fetchTodos();
        })
        .catch(err => console.log(err))
    }
   

  return (
    <div className='create_form'>
        <input type="text" onChange={ (e) => setTask(e.target.value)}/>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

Create.propTypes = {
  fetchTodos: PropTypes.func
};

export default Create