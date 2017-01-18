import { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { FormattedMessage } from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux';
import ExpertList from '../../components/Experts/ExpertList'

import {
  get
} from '../../utils/api';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20 // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2
  },
  button: {
    height: 68
  },
  card: {
    margin: 20, // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2,
    flex: 1,
    flexBasis: '450px'
  }
};

class Home extends Component {
  constructor() {
    super();

    this.state = {
      experts: []
    };
  }

  openExpert = (expertId) => {
    const path = '/experts/' + expertId;
    this.props.dispatch(push(path));
  }

  createAccount = () => {
    const path = '/register';
    this.props.dispatch(push(path));
  }

  componentDidMount = () => {
    this.props.getExperts();
  }

  render() {
    return(
      <div style={styles.wrapper}>
          <Card style={styles.card}>
            <CardText>
              <h1>Hello Expert!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis leo, ultrices et mollis ac, eleifend ut ligula. Aenean porttitor ullamcorper urna, ac tincidunt justo hendrerit dapibus. Quisque dapibus posuere consequat. Pellentesque tristique, ex non rutrum consectetur, lacus nulla tempor odio, quis consequat diam ipsum quis erat.</p>
              <h2>Why?</h2>
              <p>Donec est ante, efficitur eget cursus id, viverra sit amet diam.</p>
              <ul>
                <li>Nulla facilisi.</li>
                <li>Curabitur faucibus, nibh mollis porttitor mollis, tellus ligula blandit erat, sit amet tempor magna ligula vitae massa.</li>
                <li>Sed turpis leo, sodales auctor ex quis, vehicula iaculis augue. Donec condimentum consequat augue, in bibendum nisl cursus vulputate. Aenean faucibus ex nec ligula euismod, et euismod magna eleifend.</li>
              </ul>
              <RaisedButton label="Create Account" primary={true} fullWidth={true} style={styles.button} onTouchTap={this.createAccount} />
            </CardText>
          </Card>
          <Card style={styles.card}>
            <CardText>
              <h1>Some of our Experts</h1>
              <ExpertList experts={this.props.experts.data.slice(0, 5)} openExpert={this.openExpert} />
            </CardText>
          </Card>
      </div>
    );
  }
}

Home.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default Home;
