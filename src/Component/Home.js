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
            isCompleted: false
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

    const toggleComplete = (id) => {
        const updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            return todo;
        })
        setTodos(updatedTodo)

    }
    const updateTodo = (name, id) => {
        const updateTodo = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, name: name }
            }
            return todo;
        })
        setTodos(updateTodo)
    }
    const handleFavourite = (id) => {
        const copyTodos = [...todos]
        const todo = copyTodos.find(item => item.id === id)
        const index = copyTodos.indexOf(todo)
        copyTodos.unshift(copyTodos.splice(index, 1)[0]);
        setTodos(copyTodos)
    }
    return (
        <div>
            <h2>What needs to be done?</h2>
            <AddTodo addTask={addTask}></AddTodo>
            <ShowAddTodo
                todos={todos}
                handleDelete={handleDelete}
                toggleComplete={toggleComplete}
                updateTodo={updateTodo}
                handleFavourite={handleFavourite}
            ></ShowAddTodo>
        </div>
    );
};

export default Home;