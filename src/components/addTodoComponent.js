import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/todoContext';

import { StyledButton, InputContainer, Input, Small } from '../styles';

const AddTodoComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, showError] = useState(false);
  const { addTodoItem } = useContext(TodoContext);

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return showError(true);
    } else {
      showError(false);
      addTodoItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <>
      <InputContainer onSubmit={handleTodoSubmit}>
        <Input
          type="text"
          value={inputValue}
          placeholder="Type and add todo item"
          onChange={(e) => setInputValue(e.target.value)}
          data-testid="input"
        />
        <StyledButton type="submit" data-testid="createButton">
          Add
        </StyledButton>
      </InputContainer>
      {error && <Small error data-testid="error">Please fill in the form</Small>}
    </>
  );
};

export default AddTodoComponent;
