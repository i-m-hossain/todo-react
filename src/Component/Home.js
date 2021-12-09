import React, { useState } from 'react';
import AddTodo from './AddTodo';
import ShowAddTodo from './ShowAddTodo';
import Swal from 'sweetalert2'


const Home = () => {
    const [todos, setTodos] = useState([])
    const addTask = (name) => {
        if (!name.length > 0) {
            return ''
        }
        const newTodo = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            isCompleted: true
        }
        setTodos([...todos, newTodo])
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true

        }).then(result => {
            if (result.isConfirmed) {
                const remainingTodo = todos.filter(todo => todo.id !== id)
                setTodos(remainingTodo)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else {
                Swal.fire(
                    'Cancelled',
                    'Data is safe :)',
                    'error'
                )
            }
        })


    }


    return (
        <div>
            <h2>What needs to be done?</h2>
            <AddTodo addTask={addTask}></AddTodo>
            <ShowAddTodo todos={todos} handleDelete={handleDelete}></ShowAddTodo>
        </div>
    );
};

export default Home;