import {connect} from 'react-redux';
import LectureView from './LectureView';
import rest from '../../services/rest';
import { push } from 'react-router-redux'

export default connect(
  state => ({
    lectures: state.getIn(['rest', 'lectures']).toJS()
  }),
  dispatch => ({
    getLectures() {
      dispatch(rest.actions.lectures());
    },
    openLecture(lectureId) {
      const path = '/lectures/' + lectureId;
      dispatch(push(path));
    }
  })
)(LectureView);
