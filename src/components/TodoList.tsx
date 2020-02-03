import React from 'react';
import TodoCard from './TodoCard';
import { TodoElement } from 'reducers/todoReducer';
import TodoButton from 'containers/TodoButton';
import { Droppable } from "react-beautiful-dnd";

const TodoList: React.FC<TodoElement> = ({ title, cards, id }) => {
  return (
    <Droppable droppableId={String(id)}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
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
        </div>
      )}
    </Droppable>
  );
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    height: "100%",
    padding: 8,
    marginRight: 8,
  }
}

export default TodoList;
