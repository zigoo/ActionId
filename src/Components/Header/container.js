import Header from './component.js';
import { connect } from 'react-redux';

function mapStateToProps(state,props) {
	return {
		worker: state.workers.workersList[props.id]
	}
}

export default connect(mapStateToProps)(Header);