import GitRepos from './component.js';
import { connect } from 'react-redux';

function mapStateToProps(state,props) {
   return {
       workerName: state.workersList[props.id].name,
       repos: state.repos
   }
}
export default connect(mapStateToProps)(GitRepos);