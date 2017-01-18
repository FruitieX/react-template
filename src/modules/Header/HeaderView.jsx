import { Component } from 'react';
import { AppBar } from 'material-ui';
import { FormattedMessage } from 'react-intl';

import routes from '../../utils/routes';

class Header extends Component {
  getTitle(path, params) {
    if (path === '/') {
      return routes[0].name;
    }

    return routes.find((route) => {
      if (route.path === path) {
        return route.name;
      }
    }).name;
  }

  render() {
    let title = this.getTitle(this.props.pathname, this.props.params);

    if (!title) {
      title = 'ERROR: Title not found';
      console.warn(`No title found for path '${this.props.pathname}'`);
      console.warn('Make sure the title name is defined in src/routes.js');
    }

    return (
      <header>
        <AppBar title={<FormattedMessage id={title} /> }
                onLeftIconButtonTouchTap={() => this.props.toggleDrawer()}/>
      </header>
    );
  }
}

export default Header;
