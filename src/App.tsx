import React from 'react';
import TodoList from 'components/TodoList';
import { TodoState, DragIds } from 'reducers/todoReducer';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

interface OwnProps {
  dragCard: (dragIds: DragIds) => void
}

type Props = OwnProps & TodoState
const App: React.FC<Props> = ({ todo, dragCard }) => {
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if(!destination) {
      return;
    }
    const dragIds = {
      droppableIdStart: source.droppableId,
      droppableIdEnd: destination.droppableId,
      droppableIndexStart: source.index,
      droppableIndexEnd: destination.index,
      draggableId: draggableId
    }
    dragCard({...dragIds})
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListsContainer>
        {todo.map(ele => <TodoList key={ele.id} {...ele}/>)}
      </ListsContainer>
    </DragDropContext>
  );
}

export default App;
