import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content" onClick={handleToggle}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
          aria-label={`Toggle ${todo.text}`}
        />
        <span className="todo-text">{todo.text}</span>
        <span className="todo-status">
          {todo.completed ? '✓ Completed' : '○ Pending'}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="delete-btn"
        aria-label={`Delete ${todo.text}`}
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;
