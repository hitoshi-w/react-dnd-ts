import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { CardElement } from 'reducers/todoReducer';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin-bottom: 8px;
`;

interface OwnProps {
  index: number;
}
type Props = OwnProps & CardElement;

const TodoCard: React.FC<Props> = ({ text, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <CardContainer
        ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card>
            <CardContent>
              <Typography gutterBottom>
                {text}
              </Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TodoCard;
