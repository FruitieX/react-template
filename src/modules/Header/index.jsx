import { connect } from 'react-redux';

import HeaderView from './HeaderView';
import * as MenuDrawerState from '../MenuDrawer/MenuDrawerState';

export default connect(
  (state) => ({}),
  (dispatch) => ({
    toggleDrawer() {
      dispatch(MenuDrawerState.toggleDrawer());
    }
  })
)(HeaderView);
