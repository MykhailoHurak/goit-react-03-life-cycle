import React from 'react';
import './TodoList.css';
import Todo from '../Todo';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
    return (
        <ul className='TodoList'>
            {todos.map(({ id, text, completed }) => (
                <li
                    key={id}
                    className='TodoList__task'>
                    <Todo
                        text={text}
                        completed={completed}
                        onToggleCompleted={() => onToggleCompleted(id)}
                        onDeleteTodo={() => onDeleteTodo(id)}
                    />
                </li>
            ))}
        </ul>

//         <ul className="TodoList">
//     {todos.map(({ id, text, completed }) => (
//       <li
//         key={id}
//         className={classNames('TodoList__item', {
//           'TodoList__item--completed': completed,
//         })}
//       >
//         <input
//           type="checkbox"
//           className="TodoList__checkbox"
//           checked={completed}
//           onChange={() => onToggleCompleted(id)}
//         />
//         <p className="TodoList__text">{text}</p>
//         <button
//           type="button"
//           className="TodoList__btn"
//           onClick={() => onDeleteTodo(id)}
//         >
//           Удалить
//         </button>
//       </li>
//     ))}
//   </ul>
    );
};

export default TodoList;