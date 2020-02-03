import React from 'react';
import TodoCard from './TodoCard';
import { TodoElement } from 'reducers/todoReducer';

const TodoList: React.FC<TodoElement> = ({ title, cards }) => {
  return (
  <div style={styles.container}>
    <h4>{title}</h4>
    {cards.map(card => (<TodoCard {...card}/>))}
  </div>);
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
  }
}

export default TodoList;
