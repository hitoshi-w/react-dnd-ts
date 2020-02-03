import React from 'react';
import Card from './Card';

export interface TodoListProps {

}

const TodoList: React.FC<TodoListProps> = () => {
  return (
  <div style={styles.container}>
    <h3>List</h3>
    <Card />
  </div>);
}

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 300,
    padding: 8,
  }
}

export default TodoList;
