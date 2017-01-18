import { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';

class Lectures extends Component {
  componentDidMount() {
    this.props.getLectures();
  }

  render() {
    return(
      <List>
        {this.props.lectures.data.map(lecture => (
          <ListItem
            key={lecture.id}
            primaryText={lecture.title}
            onClick={(e) => {
               e.preventDefault();
               this.props.openLecture(lecture.id)
             }} />
         ))}
     </List>
    );
  }
}

Lectures.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default Lectures;
