import React from 'react';
import './styles/todo.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Todo = ({ todo, handleDelete, toggleComplete }) => {

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
                    <FiEdit className="edit"></FiEdit>
                    <RiDeleteBin6Line
                        className="delete"
                        style={{ marginLeft: '30px' }}
                        onClick={() => { handleDelete(todo.id) }}
                    ></RiDeleteBin6Line>
                </div>
            </div>

        </div >
    );
};

export default Todo;