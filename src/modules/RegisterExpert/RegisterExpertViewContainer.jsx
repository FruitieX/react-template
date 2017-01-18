import {connect} from 'react-redux';
import RegisterExpertView from './RegisterExpertView';
import { goBack } from 'react-router-redux';
import { getFormValues } from 'redux-form'
import {
  post
} from '../../utils/api';

export default connect(null,
  dispatch => ({
    cancel() {
      dispatch(goBack());
    },
    async register(values) {
      const res = await post('/experts', values);
      dispatch(goBack());
    }
  })
)(RegisterExpertView);
