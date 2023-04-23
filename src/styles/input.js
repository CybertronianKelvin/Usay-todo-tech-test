import styled from 'styled-components';

export const InputContainer = styled.form`
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 450px;
  display: flex;
`;

export const Input = styled.input`
  border: none;
  border-radius: 0;
  color: #444;
  font-size: 1rem;
  padding: 1rem;
  flex: 1;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;
