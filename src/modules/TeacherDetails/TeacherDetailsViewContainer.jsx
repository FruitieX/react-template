import {connect} from 'react-redux';
import TeacherDetailsView from './TeacherDetailsView';

export default connect(
    (state, ownProps) => ({
      teacherId: ownProps.params.id
    })
)(TeacherDetailsView);
