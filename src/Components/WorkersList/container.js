import WorkersList from './component.js';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
    	workers : state.workersList
    }
}

export default connect(mapStateToProps)(WorkersList);