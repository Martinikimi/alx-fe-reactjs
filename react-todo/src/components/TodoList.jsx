import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import './TodoList.css';

const TodoList = () => {
  // Initialize with static array of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write tests', completed: false },
    { id: 4, text: 'Master JavaScript', completed: true }
  ]);

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Get counts for display
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      
      <div className="todo-stats">
        <span className="stat-badge total">Total: {totalTodos}</span>
        <span className="stat-badge completed">Completed: {completedTodos}</span>
        <span className="stat-badge pending">Pending: {pendingTodos}</span>
      </div>

      <AddTodoForm onAdd={addTodo} />

      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">No todos yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
