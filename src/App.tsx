import React from 'react';
import TodoList from 'components/TodoList';
import { TodoState } from 'reducers/todoReducer';
import TodoButton from 'components/TodoButton';

const App: React.FC<TodoState> = ({ todo }) => {
  return (
    <div className="App">
      <div style={styles.listsContainer}>
        {todo.map(ele => <TodoList key={ele.id} {...ele}/>)}
      </div>
      <TodoButton title={true}/>
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
