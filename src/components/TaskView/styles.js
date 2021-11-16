import styled from "styled-components";

export const TaskList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-left: 0;
`;

export const TaskView = styled.div`
  background-color: aliceblue;
  border: 1px solid black;
  border-radius: 1rem;
  cursor: pointer;
  height: 5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 1.25rem;
  padding-left: 0.75rem;
  width: 6rem;
  &:hover {
    font-weight: bold;
    transform: scale(1.075);
  }
`;

export const nameTask = styled.p`
  font-weight: 1.25rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
