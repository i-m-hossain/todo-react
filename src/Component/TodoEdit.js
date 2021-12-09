import React, { useState } from 'react';

const TodoEdit = ({ todo, setEditing, updateTodo }) => {
    const [todoName, setTodoName] = useState('')
    const handleOnChange = (e) => {
        setTodoName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        updateTodo(todoName, todo.id)

    }
    return (
        <div style={{ textAlign: 'left' }}>
            <p>New name for <span style={{ color: 'chocolate', fontWeight: "700" }}>{todo.name}</span></p>
            <form style={{ margin: '0 auto' }} onSubmit={handleSubmit}>
                <input
                    type="text"
                    defaultValue={todo.name}
                    onChange={handleOnChange}

                />
                <div style={{ display: 'flex', }}>
                    <button
                        type="submit"
                        style={{
                            border: "1px solid black",
                            borderRadius: "0",
                            backgroundColor: 'white',
                            color: "black", fontWeight: "700"
                        }}
                        onClick={() => setEditing(false)}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        style={{
                            marginLeft: '10px',
                            borderRadius: "0",
                            backgroundColor: "black"
                        }}
                    >
                        Update</button>
                </div>

            </form>
        </div>
    );
};

export default TodoEdit;