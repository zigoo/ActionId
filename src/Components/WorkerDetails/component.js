import React, { Component } from 'react';

class WorkersDetails extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event,id,type) {
		let {worker,dispatch} = this.props;
		let newType = event.target.value;
	    let workerId = worker.id;

	    dispatch({
	     	type: 'changeToolType',
	     	workerId,
	     	id,
	     	newType //string
	     })
   
	}
	render() {
		const {worker, tools, toolsIds} = this.props;
		return (
			<div className="workerDetails">
			  <p>Szczegóły posiadanego sprzetu dla <b>{worker.name}</b> ID: <b>{worker.id}</b>
			  </p> 
			  <div className="workerDetails_desc">
		      <table>
			    <tbody>
				  <tr>
				      <th>Typ</th>
				  	  <th>Producent</th>
					  <th>Serial number</th>
					  <th><button className="button-small">dodaj</button></th>
		 		  </tr>	
	              {toolsIds.map((toolId, index) => {
		           	return (
		              <tr key={index}>
		                  <td><input value={tools[toolId].type} onChange={ev => this.handleChange(ev,index,'type')} /></td>
						  <td><input value={tools[toolId].manufacturer} onChange={ev => this.handleChange(ev,index,'manu')} /></td>
						  <td><input value={tools[toolId].serialNum} onChange={ev => this.handleChange(ev,index,'serNum')} /></td>
						  <td> <button className="button-small">usun</button></td>
		              </tr> 
		           	)
				   })}
	            </tbody>
			  </table>
			  </div>
			</div>
		);
	}
}

export default WorkersDetails;