import React from 'react';
import Todo from './Todo';

const ShowAddTodo = ({ todos, handleDelete, toggleComplete, updateTodo, handleFavourite }) => {

    return (
        <div>
            {
                todos.map(todo => <Todo

                    key={todo.id}
                    todo={todo}
                    handleDelete={handleDelete}
                    toggleComplete={toggleComplete}
                    updateTodo={updateTodo}
                    handleFavourite={handleFavourite}
                    todos={todos}
                ></Todo>)
            }
        </div>
    );
};

export default ShowAddTodo;