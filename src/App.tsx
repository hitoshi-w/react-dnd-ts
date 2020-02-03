import React from 'react';
import TodoList from 'components/TodoList';
import { TodoState } from 'reducers/todoReducer';

const App: React.FC<TodoState> = ({ todo }) => {
  return (
    <div className="App">
      <div style={styles.listsContainer}>
        {todo.map(ele => <TodoList {...ele}/>)}
      </div>
    </div>
  );
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  } as React.CSSProperties
}

export default App;
