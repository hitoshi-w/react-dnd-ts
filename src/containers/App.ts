import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import App from 'App';
import { RootState } from 'reducers/rootReducer';
import { dragCard, DragIds } from 'reducers/todoReducer';

const mapStateToProps = (state: RootState) => ({
  todo: state.todo,
});

const mapDispatchToProps = (
  dispatch: Dispatch
) => ({
  dragCard: (dragIds: DragIds) => dispatch(dragCard(dragIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
