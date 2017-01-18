import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { AppBar, Divider, Drawer, MenuItem } from 'material-ui';

import routes from '../../utils/routes';
import theme from '../../utils/theme';

class MenuDrawer extends Component {
  render() {
    return (
      <Drawer
        open={this.props.drawerOpened}
        docked={false}
        onRequestChange={() => this.props.closeDrawer()} >

        <AppBar title={<FormattedMessage id='navigation' />}
                onLeftIconButtonTouchTap={() => this.props.dispatch(MenuDrawerState.closeDrawer())} />

        {
          routes.map((route, index) => {
            let active = (this.props.pathname === route.path);
            if (route.path === routes[0].path && this.props.pathname === '/') {
              active = true;
            }

            return(
              <div key={index}>
                {route.separator ? <Divider /> : null}
                <MenuItem
                  leftIcon={React.createElement(route.icon)}
                  style={{color: active ? theme.palette.primary1Color : null}}
                  onTouchTap={() => {this.props.changeView(route.path)}}>

                  <FormattedMessage id={route.name} />
                </MenuItem>
              </div>
            );
          })
        }
      </Drawer>
    );
  }
}

export default MenuDrawer;
