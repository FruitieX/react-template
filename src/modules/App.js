import { connect } from 'react-redux';
import AppView from './AppView';

export default connect(
  (state, ownProps) => ({
    location: ownProps.location,
    params: ownProps.params
  })
)(AppView);
