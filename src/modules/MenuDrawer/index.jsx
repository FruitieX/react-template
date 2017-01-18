import { connect } from 'react-redux';

import MenuDrawerView from './MenuDrawerView';
import * as MenuDrawerState from './MenuDrawerState';
import { push } from 'react-router-redux'

export default connect(
  (state, ownProps) => ({
    drawerOpened: state.drawer.drawerOpened
  }),
  (dispatch) => ({
    changeView(view) {
      dispatch(MenuDrawerState.closeDrawer());
      dispatch(push(view.toLowerCase()));
    },
    closeDrawer() {
      dispatch(MenuDrawerState.toggleDrawer());
    }
  })
)(MenuDrawerView);
