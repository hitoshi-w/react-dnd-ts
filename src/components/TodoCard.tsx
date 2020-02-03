import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { CardElement } from 'reducers/todoReducer';

const TodoCard: React.FC<CardElement> = ({ text }) => {
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography gutterBottom>
          {text}
        </Typography>
      </CardContent>
  </Card>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  }
}

export default TodoCard;