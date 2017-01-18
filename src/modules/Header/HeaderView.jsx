import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { PropTypes, Component } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import * as MenuDrawerState from '../MenuDrawer/MenuDrawerState';
import { MenuRoutes, MiscRoutes } from '../../utils/routes';
import { FormattedMessage } from 'react-intl';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  toggleDrawer() {
    this.props.dispatch(MenuDrawerState.toggleDrawer());
  }

  matchMiscRoute(path, params) {
    return MiscRoutes[Object.keys(MiscRoutes).find(route => {
      let replacedRoute = route;

      if (route.indexOf(':' !== -1)) {
        Object.keys(params).forEach(param => {
          replacedRoute = replacedRoute.replace(`:${param}`, params[param]);
        });
      }

      if (replacedRoute === path) {
        return true;
      }
    })];
  }

  getTitle(path, params) {
    return MenuRoutes[path] || this.matchMiscRoute(path, params);
  }

  render() {
    return (
      <header className="header">
        <AppBar title={<FormattedMessage id={this.getTitle(this.props.pathname, this.props.params)} /> }
                onLeftIconButtonTouchTap={() => this.toggleDrawer()}/>
      </header>
    );
  }
}

export default Header;
