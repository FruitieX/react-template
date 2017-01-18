import React from 'react';
import { Component, PropTypes } from 'react';

import CircularProgress from 'material-ui/CircularProgress';

class Logout extends Component {
  componentDidMount() {
    this.props.doLogout();
  }

  render() {
    return(
      <div style={{
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '200px',
      }}>
        <CircularProgress />
      </div>
    );
  }
}

export default Logout;
