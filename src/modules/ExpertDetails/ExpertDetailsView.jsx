import { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Moment from 'moment';
import _ from 'lodash';
import {
  get
} from '../../utils/api';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    marginTop: 10,
    display: 'flex',
    flexWrap: 'wrap'
  }
};

function sendEmail() {
  alert('Send email?');
}

class ExpertDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expert: {}
    };
  }

  async componentDidMount() {
    const expert = await get('/experts/' + this.props.expertId);
    this.setState({ expert });
  }

  render() {
    return(
      <Card style={{
          margin: this.context.muiTheme.spacing.desktopGutter / 2,
          flex: 1,
          flexBasis: '450px'
        }}>
        <CardHeader
          title={this.state.expert.name}
          subtitle={this.state.expert.title}
          avatar={this.state.expert.photograph}>
          <div style={styles.wrapper}>
            {/* TODO: Subjects should come as an array (?) */}
            <Chip
              style={styles.chip}>
              {this.state.expert.subjects}
            </Chip>
            <Chip
              style={styles.chip}>
              {this.state.expert.subjects}
            </Chip>
            <Chip
              style={styles.chip}>
              {this.state.expert.subjects}
            </Chip>
          </div>
        </CardHeader>
        <CardText>
          <h3>Description</h3>
          <p>{this.state.expert.description}</p>
          <h3>Area</h3>
          <p>{this.state.expert.area}</p>
          <pre>
            { JSON.stringify(this.state.expert, null, 2) }
          </pre>
        </CardText>
        <CardActions>
          <FlatButton label="Contact" onTouchTap={sendEmail} />
        </CardActions>
      </Card>
    );
  }
}

ExpertDetail.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default ExpertDetail;
