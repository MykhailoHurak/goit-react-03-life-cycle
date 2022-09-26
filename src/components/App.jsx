import React from 'react';
import shortid from 'shortid';
import TodoList from './TodoList';
import './TodoList/TodoList.css';

import TodoEditor from './TodoEditor';
import TodoFilter from './TodoFilter';

import Modal from './Modal';
import Tabs from './Tabs';
import tabs from '../tabs.json';

import IconButton from './IconButton';
import { ReactComponent as IconPlus } from '../icons/plus.svg';

class App extends React.Component {
  state = {
    // todos: [
    //   { id: 'id-1', text: 'Man Utd', completed: true },
    //   { id: 'id-2', text: 'Man City', completed: false },
    //   { id: 'id-3', text: 'Chelsea London', completed: false },
    //   { id: 'id-4', text: 'Arsenal London', completed: false },
    // ],
    todos: [],
    filter: '',
    showModal: false
  };

  componentDidMount() {
    console.log('App componentDidMount');
    const tds = localStorage.getItem('todos');
    // console.log(tds);
    const parsedTds = JSON.parse(tds);
    // console.log(parsedTds);
    if (parsedTds) {
      console.log('Оновились todos, записуємо в localStorage');
     this.setState({todos: parsedTds}); 
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate')
    if (prevState.todos !== this.state.todos) {
      console.log('Оновилось поле todos')
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    // console.log('prevState', prevState);
    // console.log('this.state', this.state);

    if (this.state.todos.length > prevState.todos.length && prevState.todos.length !== 0) {
      this.toggleModal();
    }
  };

  addTodo = (text) => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    };

    this.setState((previousState) => ({
      todos: [todo, ...previousState.todos],
    }))

    // this.toggleModal();
  };

  deleteTodo = (todoId) => {
    this.setState((previousState) => ({
      todos: previousState.todos.filter(todo => todo.id !== todoId)
    }))
  };

  toggleCompleted = (todoId) => {
    // console.log(tosdoId);

    // this.setState((previousState) => ({
    //   todos: previousState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       };
    //     }
    //     return todo;
    //   })
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
    }))
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };

  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.todos.filter((todo) => (
      todo.text.toLowerCase().includes(normalizedFilter)
    ))
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 0
    )
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }))
  };

  render() {
    console.log('App render')

    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const totalCompletedTodoCount = this.calculateCompletedTodos();

    // const normalizedFilter = this.state.filter.toLowerCase();

    // const visibleTodos = this.state.todos.filter((todo) => (
    //   todo.text.toLowerCase().includes(normalizedFilter)
    // ))

    const visibleTodos = this.getVisibleTodos();
    
    return (
      <>
        <Tabs items={tabs} />

        <button
          type='button'
          onClick={this.toggleModal}
          className='Modal__Button'
        >
          Open Modal
        </button>
        
        {this.state.showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <h1>Modal Title</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eveniet saepe nam molestias deleniti minus aut unde beatae? Magni cum adipisci minima molestiae earum repudiandae eaque at? Totam nisi vitae adipisci nostrum sed cupiditate ad deserunt, magni dolorum autem? Sint possimus nobis adipisci maxime architecto iusto quos, commodi reiciendis culpa blanditiis dolorem explicabo. Mollitia possimus totam tenetur facilis beatae aperiam ducimus corporis ipsa perferendis excepturi? Cum itaque reiciendis doloribus molestiae cumque deserunt eum voluptate, soluta quae facere vel? Necessitatibus, sit? Perspiciatis dicta quis enim amet officia possimus odio qui aut error facilis! Voluptate amet, totam alias impedit consequatur nesciunt non.</p>
            <button type='button' onClick={this.toggleModal} className='Modal__Button'>Close Modal</button>
          </Modal>
        )}

        {this.state.showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <TodoEditor
              onSubmit={this.addTodo}
            />
            <button type='button' onClick={this.toggleModal} className='Modal__Button'>Close Modal</button>
          </Modal>
        )}

        <div className='TodoListBox'>
          <h2 className='TodoList__title'>TodoList</h2>
          <IconButton>
            <IconPlus
              onClick={this.toggleModal}
              aria-label='Додати Todo'
              width='40'
              height='40'
              fill='black' />
          </IconButton>
          <div>
            <p>Total Todos: <span className='TodoList__totalCount'>{totalTodoCount}</span></p>
            <p>Total Done: <span className='TodoList__totalCount'>{totalCompletedTodoCount}</span></p>
          </div>

          {/* <TodoEditor
            onSubmit={this.addTodo}
          /> */}

          <TodoFilter
            value={this.state.filter}
            onChange={this.changeFilter}
          />

          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>
      </>
    );
  };
}

export default App;