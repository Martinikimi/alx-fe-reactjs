import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Todo List</h1>
        <p>A fully tested Todo application with Jest & React Testing Library</p>
      </header>
      <main>
        <TodoList />
      </main>
      <footer className="App-footer">
        <p>© 2024 React Todo Demo - ALX Project</p>
      </footer>
    </div>
  );
}

export default App;
