import React from 'react';
import Todo from './Todo';

const ShowAddTodo = ({ todos, handleDelete, toggleComplete }) => {

    return (
        <div>
            {
                todos.map(todo => <Todo
                    key={todo.id}
                    todo={todo}
                    handleDelete={handleDelete}
                    toggleComplete={toggleComplete}
                ></Todo>)
            }
        </div>
    );
};

export default ShowAddTodo;