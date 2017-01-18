import { connect } from 'react-redux';

import { clearAuthenticationToken } from '../../utils/authentication';
import LogoutView from './LogoutView';

export default connect(
  (state) => ({}),
  (dispatch) => ({
    doLogout() {
      clearAuthenticationToken();

      // reload app
      location.reload();
    }
  })
)(LogoutView);
