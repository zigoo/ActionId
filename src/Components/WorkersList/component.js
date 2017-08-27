import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class WorkersList extends Component {
	constructor(props) {
		super(props);
		this.redirect = this.redirect.bind(this)
	}
	redirect(id) {
		browserHistory.push(`/${id}`)
	}
	render() {
		const {workers} = this.props;
		return (
			<div className="workersList">
			  <div className="wL_desc">  
				 <h6>
				   <span className="wL_sp-l">Imie i nazwisko</span>
				   <span className="wL_sp-r">Ilość sprzetów</span>
				 </h6>
				 <ul>
				   {Object.keys(workers).map(workerId => 
				   <li key={workerId} onClick={()=>this.redirect(workerId)}>
                     <span >{workers[workerId].name} </span>
                     <span className="wL_desc-sp">{workers[workerId].tools.length}</span>
                   </li>
				)} 
                 </ul>	 
               </div>
			</div>
		);
	}
}

export default WorkersList;

 