import WorkersList from './component.js';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
    	workers : state.workers.workersList
    }
}

export default connect(mapStateToProps)(WorkersList);