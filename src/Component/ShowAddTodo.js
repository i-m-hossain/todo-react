import React from 'react';
import Todo from './Todo';

const ShowAddTodo = ({ todos, handleDelete }) => {

    return (
        <div>
            {
                todos.map(todo => <Todo todo={todo} handleDelete={handleDelete}></Todo>)
            }
        </div>
    );
};

export default ShowAddTodo;