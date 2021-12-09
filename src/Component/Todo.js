import React, { useState } from 'react';
import './styles/todo.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import TodoEdit from './TodoEdit';
import { AiOutlineStar } from 'react-icons/ai'

const Todo = ({ todo, handleDelete, toggleComplete, updateTodo, handleFavourite }) => {
    const [editing, setEditing] = useState(false)
    const handleEdit = () => {
        setEditing(!editing)
    }
    const handleSorting = (id) => {
        handleFavourite(id)

    }
    return (
        <div className="container">
            <div
                className="todo-container"

            >
                <div className="todo-container">
                    <input
                        type="checkbox"
                        defaultChecked={todo.isCompleted}
                        onClick={() => { toggleComplete(todo.id) }}
                    />
                    <span
                        style={{
                            textDecoration: todo.isCompleted ? 'line-through' : 'none'
                        }}
                        className="title">
                        {todo.name}
                    </span>
                </div>
                <div>
                    <FiEdit
                        className="edit"
                        onClick={handleEdit}
                    ></FiEdit>
                    <RiDeleteBin6Line
                        className="delete"
                        style={{ marginLeft: '30px' }}
                        onClick={() => { handleDelete(todo.id) }}
                    ></RiDeleteBin6Line>
                    <AiOutlineStar
                        style={{ marginLeft: '30px' }}
                        onClick={() => handleSorting(todo.id)}
                    ></AiOutlineStar>
                </div>
            </div>
            <div>
                {
                    editing && <TodoEdit
                        todo={todo}
                        setEditing={setEditing}
                        updateTodo={updateTodo}
                    ></TodoEdit>
                }
            </div>

        </div >
    );
};

export default Todo;