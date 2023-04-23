import styled from 'styled-components';

export const Todos = styled.ul`
  background-color: #fff;
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 450px;
`;

export const ToDoItem = styled.li`
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem;
  display: flex;
  align-content: space-around;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #d7d1d1;
`;

export const TodoCompleted = styled.div`
  color: #b6b6b6;
  text-decoration: line-through;
`;

export const TodoText = styled.p`
  text-decoration: ${(props) => props.solved && 'line-through'};
  text-decoration-color: #c30202;
  overflow-wrap: break-word;
  overflow: hidden;
  margin-right: 10px;
`;

export const Small = styled.small`
  display: block;
  font-size: .6rem;
  font-style: italic;
  align-self: bottom;
  color: ${(props) => props.error && '#c30202'};
  margin-bottom: ${(props) => props.error && '10px'};
`;
