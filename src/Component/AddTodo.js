import React, { useState } from 'react';
import './styles/addTodo.css'


const AddTodo = ({ addTask }) => {
    const [name, setName] = useState('')

    const handleOnChange = (e) => {
        setName(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        addTask(name)
        setName("")
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit} style={{ padding: "20px", width: "50%", margin: '0 auto' }}>
                <input
                    type="text"
                    placeholder="Add to do"

                    onChange={handleOnChange}
                    value={name}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTodo;