import React from 'react';

import TodoContextProvider from './contexts/todoContext';
import TodoListComponent from './components/todoListComponent';

import { GlobalStyle } from './styles';

const App = () => (
  <TodoContextProvider>
    <GlobalStyle />
    <TodoListComponent />
  </TodoContextProvider>
);

export default App;
