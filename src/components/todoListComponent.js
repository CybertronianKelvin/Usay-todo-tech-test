import React, { useContext } from 'react';

import { TodoContext } from '../contexts/todoContext';
import {
  Todos,
  ToDoItem,
  TodoText,
  Small,
  StyledButton
} from '../styles';
import AddTodoComponent from './addTodoComponent';

const TodoListComponent = () => {
  const { todoList, solveTodo } = useContext(TodoContext);
  const todosToAction = todoList.filter((todo) => todo.solved === false).length;
  return (
    <div data-testid="TodoList">
      <h1 data-testid="todoCount">
        {`${todosToAction} items to do`}
      </h1>
      <AddTodoComponent />
      <Todos>
        {todoList.map((todoItem) => (
          <ToDoItem key={todoItem.id} >
            <TodoText solved={todoItem.solved} data-testid="todo">
              {todoItem.title}
              {' '}
            </TodoText>
            <Small>{new Date(todoItem.timestamp).toLocaleString()}</Small>
            {!todoItem.solved && (
              <StyledButton
                md
                onClick={() => solveTodo(todoItem.id)}
                data-testid="solveButton"
              >
                Solve
              </StyledButton>
            )}
          </ToDoItem>
        ))}
      </Todos>
    </div>
  );
};

export default TodoListComponent;
