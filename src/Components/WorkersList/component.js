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
			  Workers <br/>
			  <table>
			    <tbody>
				  <tr>
				      <th>Id</th>
				  	  <th>Imie i nazwisko</th>
					  <th>Ilosć sprzetu</th>
		 		  </tr>
				  {Object.keys(workers).map(workerId => 
				  <tr key={workerId} onClick={()=>this.redirect(workerId)}>
              	       <td>{workers[workerId].id}</td>
                       <td>{workers[workerId].name}</td>
                       <td data-rel="id">{workers[workerId].tools.length}</td>
                  </tr>
				)} 
				  </tbody>
				</table>
			</div>
		);
	}
}

export default WorkersList;

 