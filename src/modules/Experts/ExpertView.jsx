import { Component, PropTypes } from 'react';
import ExpertList from '../../components/Experts/ExpertList'
import { push } from 'react-router-redux';
import {
  get
} from '../../utils/api';

class Experts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experts: []
    };
  }

  openExpert = (expertId) => {
    const path = '/experts/' + expertId;
    this.props.dispatch(push(path));
  }

  componentDidMount = async () => {
    const experts = await get('/experts');
    this.setState({ experts });
  }

  render = () => {
    return(
      <ExpertList experts={this.state.experts} openExpert={this.openExpert} />
    );
  }
}

export default Experts;
