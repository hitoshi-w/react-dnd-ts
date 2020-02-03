import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export interface TodoCardProps {

}

const TodoCard: React.FC<TodoCardProps> = () => {
  return (
    <Card>
      <Typography gutterBottom>
        Word of the Day
      </Typography>
  </Card>
  );
}

export default TodoCard;
