import WorkersDetails from './component.js';
import {changeTool, deleteTool, changeMan} from '../../Helpers/actions.js';
import { connect } from 'react-redux';

function mapStateToProps(state,props) {
   return {
    	worker: state.workers.workersList[props.id],
    	toolsIds: state.workers.workersList[props.id].tools,
    	tools: state.tools.toolsList,
    }
}
export default 
    connect(mapStateToProps,
           {changeTool,deleteTool,changeMan})(WorkersDetails);