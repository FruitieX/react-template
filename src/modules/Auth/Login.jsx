import { connect } from 'react-redux';
import LoginView from './LoginView';
import rest from '../../services/rest';
import { replace } from 'react-router-redux'

export default connect(
  (state, ownProps) => ({
    auth: state.auth,
    redirectPath: ownProps.location.query.redirect
  }),
  dispatch => ({
    doLogin(creds) {
      dispatch(rest.actions.auth({}, { body: JSON.stringify(creds) }));
    },
    redirect(path) {
      dispatch(replace(path));
    }
  })
)(LoginView);
