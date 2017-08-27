import GitRepos from './component.js';
import { connect } from 'react-redux';

function mapStateToProps(state,props) {
   return {
       workerName: state.workers.workersList[props.id].username,
       repos: state.workers.repos
   }
}
export default connect(mapStateToProps)(GitRepos);