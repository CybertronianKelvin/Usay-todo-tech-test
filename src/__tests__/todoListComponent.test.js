import { render, fireEvent } from '@testing-library/react';
import TodoListComponent from '../components/todoListComponent';
import TodoContextProvider, { TodoContext } from '../contexts/todoContext';

test('it creates a new todo', () => {
  const doc = render(
    <TodoContextProvider>
      <TodoListComponent />
    </TodoContextProvider>
  );

  const inputElement = doc.getByTestId('input');
  const createButtonElement = doc.getByTestId('createButton');
  const todoCountElement = doc.getByTestId('todoCount');

  // Create the todo.
  fireEvent.change(inputElement, { target: { value: 'Complete tech test.' } });
  fireEvent.click(createButtonElement);

  const todos = doc.getAllByTestId('todo');
  const todo = doc.getByTestId('todo');
  const todoNameElement = todo.firstChild;

  // The name should be in the document
  expect(todoNameElement.textContent).toBe('Complete tech test.');

  // The text should show "1 todos"
  expect(todoCountElement).toHaveTextContent('1 items to do');

  // The input field should be blank.
  expect(inputElement.value).toBe('');

  // The todo should be in the document.
  expect(todo).toBeInTheDocument();

  // There should be 1 todo in the document.
  expect(todos.length).toBe(1);
});

test('it solves a todo', () => {
  const doc = render(
    <TodoContextProvider>
      <TodoListComponent />
    </TodoContextProvider>
  );

  const inputElement = doc.getByTestId('input');
  const createButtonElement = doc.getByTestId('createButton');
  const todoCountElement = doc.getByTestId('todoCount');

  // Create the todo.
  fireEvent.change(inputElement, { target: { value: 'Complete tech test.' } });
  fireEvent.click(createButtonElement);

  // Get the newly created todo.
  const todo = doc.queryByTestId('todo');

  // Click the delete button on the todo.
  const todoDeleteButton = doc.getByTestId('solveButton');
  fireEvent.click(todoDeleteButton);

  // Get all todos
  const todos = doc.queryAllByTestId('todo');

  // The text should be "0 todos"
  expect(todoCountElement).toHaveTextContent('0 items to do');
});

test('it doesn\'t create empty todos', () => {
  const doc = render(
    <TodoContextProvider>
      <TodoListComponent />
    </TodoContextProvider>
  );

  const inputElement = doc.getByTestId('input');
  const createButtonElement = doc.getByTestId('createButton');
  const todoCountElement = doc.getByTestId('todoCount');

  // Create the todo.
  fireEvent.change(inputElement, { target: { value: '' } });
  fireEvent.click(createButtonElement);

  // Get the newly created todo.
  const todo = doc.queryByTestId('todo');

  // Get all todos
  const todos = doc.queryAllByTestId('todo');

  // The text should be "0 todos"
  expect(todoCountElement).toHaveTextContent('0 items to do');

  // Error state to be present
  const error = doc.getByTestId('error');
  expect(error).toBeInTheDocument();
});
