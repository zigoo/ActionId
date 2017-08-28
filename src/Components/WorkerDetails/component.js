import React, { Component } from 'react';

import './styles.css'

class WorkersDetails extends Component {
	constructor(){
		super();
		this.state = {
			typeValue: []
		}
	}
 
	handleTypeChange(event,id,toolId) {
		let {changeTool} = this.props;
		let text = event.target.value;
 
	    changeTool({toolId,text});
	}
   
    handleSubmit(toolId) {
    	const {worker, deleteTool} = this.props;
		 
		deleteTool({toolId,worker})
    }

	render() {
		const {tools, toolsIds} = this.props;
		return (
			<div className="workerDetails">
			  <div className="workerDetails_desc">
		      <table>
			    <tbody>
				  <tr>
				      <th>Typ</th>
				  	  <th>Producent</th>
					  <th>Serial number</th>
					  <th><button className="button-small button-outline">dodaj</button></th>
		 		  </tr>	
	              {toolsIds.map((toolId, index) => {
		           	return (
		              <tr key={index}>
		                  <td><input value={tools[toolId].type} onChange={ev => this.handleTypeChange(ev,index,toolId)} /></td>
						  <td><input value={tools[toolId].manufacturer} onChange={ev => this.handleManChange(ev,index)} /></td>
						  <td><input value={tools[toolId].serialNum} onChange={ev => this.handleSerialChange(ev,index)} /></td>
						  <td> <button type="submit" onClick={()=> this.handleSubmit(toolId) } className="button-small">usun</button></td>
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