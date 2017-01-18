import { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { push } from 'react-router-redux'

import {
  get
} from '../../utils/api';

class Teachers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teachers: []
    };
  }

  openTeacher(teacherId) {
    const path = '/teachers/' + teacherId;
    this.props.dispatch(push(path));
  }

  async componentDidMount() {
    const teachers = await get('/teachers');
    this.setState({ teachers });
  }

  render() {
    return(
      <List>
        {this.state.teachers.map(teacher => (
          <ListItem
            key={teacher.id}
            primaryText={teacher.name}
            secondaryText={teacher.title + ' @ ' + teacher.school}
            leftAvatar={
              <Avatar src={teacher.photograph} />
            }
            onClick={(e) => {
               e.preventDefault();
               this.openTeacher(teacher.id)
             }} />
         ))}
     </List>
    );
  }
}

Teachers.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default Teachers;
