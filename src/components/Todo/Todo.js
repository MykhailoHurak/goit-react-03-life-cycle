import React from 'react';
import './Todo.css';

import IconButton from '../IconButton';
import { ReactComponent as IconDelete } from '../../icons/delete.svg';

const Todo = ({ completed, text, onToggleCompleted, onDeleteTodo }) => {
    return (
        <>
            <input
                type="checkbox"
                className="TodoList__checkbox"
                checked={completed}
                onChange={onToggleCompleted}
            />
            <p className='TodoList__text'>{text}</p>
            
            <button
                className='TodoList__buttonDelete'
                onClick={onDeleteTodo}
            >
                Delete
            </button>
            
            <IconButton>
                <IconDelete width='16' height='16' fill='black' onClick={onDeleteTodo} />
            </IconButton>
        </>
    );
}

export default Todo;