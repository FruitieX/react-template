import React from 'react';
import { Component } from 'react';

import MenuDrawer from './MenuDrawer';
import Header from './Header';

class App extends Component {
  render() {
    return(
      <div>
        <MenuDrawer pathname={this.props.location.pathname} />
        <Header pathname={this.props.location.pathname} params={this.props.params} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;
