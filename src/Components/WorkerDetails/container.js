import WorkersDetails from './component.js';
import { connect } from 'react-redux';

function mapStateToProps(state,props) {
   return {
    	worker: state.workers.workersList[props.id],
    	tools: state.tools.toolsList,
    	toolsIds: 	state.workers.workersList[props.id].tools,
    }
}
export default connect(mapStateToProps)(WorkersDetails);