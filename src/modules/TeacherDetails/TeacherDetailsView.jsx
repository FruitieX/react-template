import { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {
  get
} from '../../utils/api';

function sendEmail() {
  alert('Send email?');
}

class TeacherDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teacher: {}
    };
  }

  async componentDidMount() {
    const teacher = await get('/teachers/' + this.props.teacherId);
    this.setState({ teacher });
  }

  render() {
    return(
      <Card style={{
          margin: this.context.muiTheme.spacing.desktopGutter / 2,
          flex: 1,
          flexBasis: '450px'
        }}>
        <CardHeader
          title={this.state.teacher.name}
          subtitle={this.state.teacher.title}
          avatar={this.state.teacher.photograph}>
        </CardHeader>
        <CardText>
          <h3>Description</h3>
          <p>{this.state.teacher.description}</p>
          <h3>School {this.state.teacher.school}</h3>
          <p>{this.state.teacher.address}</p>
          <pre>
            { JSON.stringify(this.state.teacher, null, 2) }
          </pre>
        </CardText>
        <CardActions>
          <FlatButton label="Contact" onTouchTap={sendEmail} />
        </CardActions>
      </Card>
    );
  }
}

TeacherDetail.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default TeacherDetail;
