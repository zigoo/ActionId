import WorkersDetails from './component.js';
import { connect } from 'react-redux';

function mapStateToProps(state,props) {
   return {
    	tools: state.workersList[props.id].tools,
    }
}
export default connect(mapStateToProps)(WorkersDetails);