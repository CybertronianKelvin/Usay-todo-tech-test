import { actions } from '../actions/todoActions';

export const todoReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO_ITEM:
      return {
        todoList: [
          {
            id: new Date().valueOf(),
            title: action.todoItemTitle,
            timestamp: new Date(),
            solved: false,
          },
          ...state.todoList,
        ],
      };
    case actions.SOLVE_TODO: {
      const recievedItem = state.todoList.find(
        (todoItem) => todoItem.id === action.todoItemId,
      );
      recievedItem.solved = true;
      const updatedList = state.todoList.filter(item => item.id !== action.todoItemId);
      return { todoList: [...updatedList, recievedItem] };
    }
    default:
      return state;
  }
};
