import {connect} from 'react-redux';
import ExpertDetailsView from './ExpertDetailsView';

export default connect(
    (state, ownProps) => ({
      expertId: ownProps.params.id
    })
)(ExpertDetailsView);
