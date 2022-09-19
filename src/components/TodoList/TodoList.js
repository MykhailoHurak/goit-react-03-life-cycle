import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => {
    return (
        <ul className='TodoList'>
            {todos.map(({ id, text }) => (
                <li className='TodoList__task' key={id}>
                    <p className='TodoList__text'>{text}</p>
                    <button
                        className='TodoList__buttonDelete'
                        onClick={() => (onDeleteTodo(id))}
                    >Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;