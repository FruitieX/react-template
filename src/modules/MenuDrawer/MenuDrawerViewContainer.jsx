import {connect} from 'react-redux';
import MenuDrawerView from './MenuDrawerView';

export default connect(
  state => ({
    drawerOpened: state.getIn(['drawer', 'drawerOpened'])
  })
)(MenuDrawerView);
