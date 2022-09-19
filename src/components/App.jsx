import React from 'react';
import TodoList from './TodoList';
import './TodoList/TodoList.css';

import Counter from './Counter';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends React.Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Task 1', completed: true },
      { id: 'id-2', text: 'Task 2', completed: false },
      { id: 'id-3', text: 'Task 3', completed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState((prev) => ({
      todos: prev.todos.filter(todo => todo.id !== todoId)
    }))
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const totalCompletedTodoCount = (todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 0
    ));

    return (
      <>
        <div className='TodoListBox'>
          <h2 className='TodoList__title'>TodoList</h2>
          <div>
            <p>Total Todos: <span className='TodoList__totalCount'>{totalTodoCount}</span></p>
            <p>Total Done: <span className='TodoList__totalCount'>{totalCompletedTodoCount}</span></p>
          </div>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </div>

        <Counter initialValue={0} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
      </>
    );
  };
}

export default App;


// export const App = () => {
//   return (
//     <div>
//       {/* React homework template */}
//       {/* <Counter initialValue={0} /> */}
//       {/* <Dropdown /> */}
//       {/* <ColorPicker options={colorPickerOptions} /> */}
//       <TodoList />
//     </div>
//   );
// };