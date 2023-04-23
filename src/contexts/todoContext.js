import React, { createContext, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer';
import { actions } from '../actions/todoActions';
import { initialState } from '../states/todoState';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemTitle) => {
      dispatch({ type: actions.ADD_TODO_ITEM, todoItemTitle });
    },
    solveTodo: (todoItemId) => {
      dispatch({ type: actions.SOLVE_TODO, todoItemId });
    },
  };

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
