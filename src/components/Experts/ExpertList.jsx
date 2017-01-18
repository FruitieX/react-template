import { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class ExpertList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <List>
        {this.props.experts.map(expert => (
          <ListItem
            key={expert.id}
            primaryText={expert.name}
            secondaryText={expert.title}
            leftAvatar={
              <Avatar src={expert.photograph} />
            }
            onClick={(e) => {
               e.preventDefault();
               this.props.openExpert(expert.id)
             }} />
         ))}
     </List>
    );
  }
}
