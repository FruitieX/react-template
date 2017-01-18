import {connect} from 'react-redux';
import LectureDetailsView from './LectureDetailsView';

export default connect(
    (state, ownProps) => ({
      lectureId: ownProps.params.id
    })
)(LectureDetailsView);
