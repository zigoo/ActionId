import React, { Component } from 'react';
import {debounce} from 'throttle-debounce';
import Warning from '../Warning/Warning.js';

import './styles.css'

class WorkersDetails extends Component {
	constructor(){
		super();
		this.state = {
			typeValue: []
		}
	}

	handleTypeChange(event,toolId) {
		let {changeTool} = this.props;
		let text = event.target.value;
	    debounce(500, changeTool({toolId,text}));
 
	}
    
    handleManChange(event,toolId) {
    	let {changeMan} = this.props;
    	let text = event.target.value;

        debounce(500, changeMan({toolId,text}));
    }

    handleDelete(toolId) {
    	const {worker, deleteTool} = this.props; 
		deleteTool({toolId,worker})
    }

	render() {
		const {tools, toolsIds} = this.props;
		return (
			<div className="workerDetails">
			  {toolsIds.length !== 0 
		      ? <table>
			      <tbody>
				  <tr>
				      <th>Typ</th>
				  	  <th>Producent</th>
					  <th>Numer seryjny</th>
					  <th><button className="button-small button-outline">dodaj</button></th>
		 		  </tr>	
	              {toolsIds.map((toolId, index) => {
		           	return (
		              <tr key={index}>
		                  <td><input value={tools[toolId].type} onChange={ev => this.handleTypeChange(ev,toolId)} /></td>
						  <td><input value={tools[toolId].manufacturer} onChange={ev => this.handleManChange(ev,toolId)} /></td>
						  <td><p className="wrk_dt-sn">{tools[toolId].serialNum} </p></td>
						  <td> <button  onClick={()=> this.handleDelete(toolId) } className="button-small">usun</button></td>
		              </tr> 
		           	)
				   })}
	              </tbody>
			    </table>
			  : <Warning />
			  }
		    </div>
		);
	}
}

export default WorkersDetails;