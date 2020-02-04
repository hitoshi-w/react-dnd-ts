import React from 'react';
import TodoCard from './TodoCard';
import { TodoElement } from 'reducers/todoReducer';
import TodoButton from 'containers/TodoButton';
import { Droppable } from "react-beautiful-dnd";
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  height: 100%;
  padding: 8px;
  margin-right: 8px;
`;

const TodoList: React.FC<TodoElement> = ({ title, cards, id }) => {
  return (
    <Droppable droppableId={id}>
      {provided => (
        <ListContainer
          {...provided.droppableProps}
          ref={provided.innerRef}>
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TodoCard
              key={card.id}
              id={card.id}
              index={index}
              text={card.text}
            />
          ))}
          <TodoButton id={id} />
        </ListContainer>
      )}
    </Droppable>
  );
}

export default TodoList;
