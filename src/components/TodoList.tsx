import React from 'react';
import TodoCard from './TodoCard';
import { TodoElement } from 'reducers/todoReducer';
import TodoButton from 'components/TodoButton';

const TodoList: React.FC<TodoElement> = ({ title, cards }) => {
  return (
  <div style={styles.container}>
    <h4>{title}</h4>
    {cards.map(card => (<TodoCard key={card.id} {...card}/>))}
    <TodoButton title={false}/>
  </div>);
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
