import React from 'react';
import TodoList from 'components/TodoList';
import { TodoState } from 'reducers/todoReducer';
import { DragDropContext } from 'react-beautiful-dnd';

const App: React.FC<TodoState> = ({ todo }) => {
  const onDragEnd = () => {

  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <div style={styles.listsContainer}>
          {todo.map(ele => <TodoList key={ele.id} {...ele}/>)}
        </div>
      </div>
    </DragDropContext>
  );
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  } as React.CSSProperties
}

export default App;
