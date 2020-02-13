import { connect } from 'react-redux';
import TodoButton from 'components/TodoButton';
import { RootState } from 'reducers/rootReducer';
import { createCard } from 'reducers/todoReducer';
import {Dispatch} from 'redux';

// const mapStateToProps = (state: RootState) => ({
//   todo: state.todo,
// });

const mapDispatchToProps = (
  dispatch: Dispatch
) => ({
  createCard: (listID: string, text: string) => dispatch(createCard(listID, text)),
});

export default connect(null, mapDispatchToProps)(TodoButton);
