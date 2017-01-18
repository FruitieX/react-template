import {connect} from 'react-redux';
import HomeView from './HomeView';
import rest from '../../services/rest';

export default connect(
  state => ({
    experts: state.getIn(['rest', 'experts']).toJS()
  }),
  dispatch => ({
    getExperts() {
      dispatch(rest.actions.experts());
    }
  })
)(HomeView);
