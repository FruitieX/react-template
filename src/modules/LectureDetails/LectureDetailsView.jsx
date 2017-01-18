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
    display: 'flex',
    flexWrap: 'wrap'
  }
};

class LectureDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lecture: {}
    };
  }

  async componentDidMount() {
    const lecture = await get('/lectures/' + this.props.lectureId);
    this.setState({ lecture });
  }

  render() {
    return(
      <Card style={{
          margin: this.context.muiTheme.spacing.desktopGutter / 2,
          flex: 1,
          flexBasis: '450px'
        }}>
        <CardHeader
          title={'User #ID' + this.state.lecture.creatorId}
          subtitle={Moment(this.state.lecture.dates).format("D MMMM YYYY, h:mm")}
          avatar="http://lorempixel.com/128/128/people"
        >
        <Chip style={styles.chip}>
          <Avatar size={32}>{String(this.state.lecture.creatorType).charAt(0)}</Avatar>
          {_.capitalize(this.state.lecture.creatorType)}
        </Chip>
      </CardHeader>
        <CardTitle
          title={this.state.lecture.title}
          subtitle={Moment(this.state.lecture.dates).format("D MMMM YYYY, h:mm")} />
        <CardText>
          <h3>Description</h3>
          <p>{this.state.lecture.description}</p>
          <h3>Notes</h3>
          <h4>Teacher Notes</h4>
          <p>{this.state.lecture.teacherNote}</p>
          <h4>Expert Notes</h4>
          <p>{this.state.lecture.expertNote}</p>
          <h3>Target Students</h3>
          <p>{this.state.lecture.targetStudents}</p>
          <h3>Area</h3>
          <p>{this.state.lecture.area}</p>
          <hr/>
          <p>
            { JSON.stringify(this.state.lecture) }
          </p>
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}

LectureDetail.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default LectureDetail;
