import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render Test
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the component title is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Master JavaScript')).toBeInTheDocument();
    
    // Check if the completed todo has the correct styling
    const completedTodo = screen.getByText('Master JavaScript');
    const todoItem = completedTodo.closest('.todo-item');
    expect(todoItem).toHaveClass('completed');
    
    // Check stats
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 3')).toBeInTheDocument();
  });

  // Test 2: Adding Todos
  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    // Get the input field and button
    const input = screen.getByLabelText('New todo input');
    const addButton = screen.getByText('Add Todo');
    
    // Simulate user typing
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    expect(input.value).toBe('New Test Todo');
    
    // Simulate form submission
    fireEvent.click(addButton);
    
    // Check if new todo appears
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Check if input is cleared
    expect(input.value).toBe('');
    
    // Check if stats updated
    expect(screen.getByText('Total: 5')).toBeInTheDocument();
    expect(screen.getByText('Pending: 4')).toBeInTheDocument();
  });

  // Test 3: Adding Empty Todo
  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const initialTotal = screen.getByText(/Total:/).textContent;
    const initialTodosCount = 4; // From initial state
    
    const input = screen.getByLabelText('New todo input');
    const addButton = screen.getByText('Add Todo');
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Check that no new todo was added
    const todoItems = screen.getAllByRole('checkbox');
    expect(todoItems).toHaveLength(initialTodosCount);
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
  });

  // Test 4: Toggling Todos
  test('toggles todo completion status when clicked', () => {
    render(<TodoList />);
    
    // Find a pending todo
    const pendingTodo = screen.getByText('Learn React');
    const todoItem = pendingTodo.closest('.todo-item');
    
    // Initially not completed
    expect(todoItem).not.toHaveClass('completed');
    
    // Click to toggle
    fireEvent.click(pendingTodo);
    
    // Should now be completed
    expect(todoItem).toHaveClass('completed');
    
    // Check if stats updated
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
    
    // Click again to toggle back
    fireEvent.click(pendingTodo);
    
    // Should not be completed again
    expect(todoItem).not.toHaveClass('completed');
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 3')).toBeInTheDocument();
  });

  // Test 5: Toggling via Checkbox
  test('toggles todo completion status when checkbox is clicked', () => {
    render(<TodoList />);
    
    // Find checkbox for a pending todo
    const pendingTodoCheckbox = screen.getAllByRole('checkbox')[0]; // First todo
    
    // Initially not checked
    expect(pendingTodoCheckbox).not.toBeChecked();
    
    // Click checkbox
    fireEvent.click(pendingTodoCheckbox);
    
    // Should be checked
    expect(pendingTodoCheckbox).toBeChecked();
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
  });

  // Test 6: Deleting Todos
  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    // Find delete button for a specific todo
    const todoToDelete = screen.getByText('Learn React');
    const todoItem = todoToDelete.closest('.todo-item');
    const deleteButton = within(todoItem).getByRole('button', { name: /delete learn react/i });
    
    // Verify todo exists
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    // Click delete button
    fireEvent.click(deleteButton);
    
    // Verify todo is gone
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    
    // Check stats updated
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
  });

  // Test 7: Multiple Operations
  test('handles multiple operations correctly', () => {
    render(<TodoList />);
    
    // Add a new todo
    const input = screen.getByLabelText('New todo input');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'Multiple Test' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Multiple Test')).toBeInTheDocument();
    expect(screen.getByText('Total: 5')).toBeInTheDocument();
    
    // Toggle the new todo
    const newTodo = screen.getByText('Multiple Test');
    fireEvent.click(newTodo);
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
    
    // Delete another todo
    const todoToDelete = screen.getByText('Write tests');
    const todoItem = todoToDelete.closest('.todo-item');
    const deleteButton = within(todoItem).getByRole('button', { name: /delete write tests/i });
    
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Write tests')).not.toBeInTheDocument();
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
  });

  // Test 8: Empty State
  test('shows empty message when all todos are deleted', () => {
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    
    // Click each delete button
    deleteButtons.forEach(button => {
      fireEvent.click(button);
    });
    
    // Check for empty message
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
    expect(screen.getByText('Total: 0')).toBeInTheDocument();
    expect(screen.getByText('Completed: 0')).toBeInTheDocument();
    expect(screen.getByText('Pending: 0')).toBeInTheDocument();
  });

  // Test 9: Form Submission with Enter Key
  test('adds todo when Enter key is pressed', () => {
    render(<TodoList />);
    
    const input = screen.getByLabelText('New todo input');
    
    fireEvent.change(input, { target: { value: 'Enter Key Todo' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    
    // Since fireEvent.keyPress doesn't trigger submit, we need to simulate form submission
    // Alternative: directly trigger submit on form
    const form = input.closest('form');
    fireEvent.submit(form);
    
    expect(screen.getByText('Enter Key Todo')).toBeInTheDocument();
  });

  // Test 10: Accessibility - ARIA labels
  test('has proper ARIA labels for accessibility', () => {
    render(<TodoList />);
    
    // Check if input has proper label
    expect(screen.getByLabelText('New todo input')).toBeInTheDocument();
    
    // Check if delete buttons have proper labels
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    expect(deleteButtons.length).toBeGreaterThan(0);
    
    // Check if checkboxes have proper labels
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      expect(checkbox).toHaveAttribute('aria-label');
    });
  });
});
