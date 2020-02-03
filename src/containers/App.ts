import { connect } from 'react-redux';
import App from 'App';
import { RootState } from 'reducers/rootReducer';

const mapStateToProps = (state: RootState) => ({
  todo: state.todo,
});

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<RootState, null, ProjectActionTypes>,
// ) => ({
//   readProjects: () => dispatch(readProjects()),
// });

export default connect(mapStateToProps, null)(App);
