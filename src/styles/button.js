import styled from 'styled-components';

export const StyledButton = styled.button`
  justify-content: center;
  align-items: center;
  background-color: #d7d1d1;
  border: none;
  font-size: ${(props) => (props.md ? '.7rem' : '1rem')};
  padding: ${(props) => (props.md ? '.5rem' : '1rem')};
  margin-left: auto;
  cursor: pointer;
`;
