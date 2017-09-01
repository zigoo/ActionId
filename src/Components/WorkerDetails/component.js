import React, { Component } from 'react';
import Warning from '../Warning/Warning.js';
import {debounce} from 'throttle-debounce';
import {focusInCurrentTarget} from '../../Helpers/helpers.js';
import './styles.css'

class WorkersDetails extends Component {
	constructor(){
		super();
		this.handleAddTool = this.handleAddTool.bind(this)
		this.state = {
			addFormVisible: false,
			newType: '',
			newManufacturer:'',
			newSerialNumber: '',
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

    handleNewType(e) {
        this.setState({newType: e.target.value})
    }

    handleNewManu(e) {
    	this.setState({newManufacturer: e.target.value})
    }

    handleSerial(e) {
    	this.setState({newSerialNumber: e.target.value})
    }

    handleAddTool() {
    	const {newType, newManufacturer, newSerialNumber} = this.state;
    	const {worker, addTool} = this.props;
    	 
    	addTool({worker,
    		     newType, 
    		     newManufacturer, 
    	         newSerialNumber})
    }

    handleAddFormVisibility() {
        this.setState({addFormVisible: true}) 
    }

    hide(e) {
        if (!focusInCurrentTarget(e)) {
    	  this.setState({addFormVisible: false})
    	}
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
					  <th>
					       <button className="button-small button-outline" 
					              onClick={()=> this.handleAddFormVisibility()}>
					                  dodaj
					      </button>
					  </th>
		 		  </tr>	
	              {toolsIds.map((toolId, index) => {
		          return (
	                <tr key={index}>
	                  <td><input value={tools[toolId].type} 
	                               onChange={ev => this.handleTypeChange(ev,toolId)} /></td>

					  <td><input value={tools[toolId].manufacturer} 
					               onChange={ev => this.handleManChange(ev,toolId)} /></td>

					  <td><p className="wrk_dt-sn">
					           {tools[toolId].serialNum}
					      </p>
					  </td>
					  <td>
					      <button className="button-small" 
					                onClick={()=> this.handleDelete(toolId)}>
					         usun
					      </button>
					  </td>
	                </tr> 
		          )})}
			      {this.state.addFormVisible &&
				  	<tr onBlur={(e)=> this.hide(e)}>
			          <td><input value={this.state.newType}
			                     onChange={e => this.handleNewType(e)}
			                     ref="niuType"
			                     placeholder="typ" /></td>

			          <td><input value={this.state.newManufacturer}
			                     onChange={e => this.handleNewManu(e)}
			                     placeholder="producent" /></td>

			          <td><input value={this.state.newSerialNumber}
			                     onChange={e => this.handleSerial(e)}
			                     className="wrk_dt-sn" 
			                     placeholder="numer seryjny"/></td>
			          <td>
			              <button className="button-small button-outline" 
				                  onClick={()=> this.handleAddTool()}>
				            dodaj
				          </button>
				       </td>
			         </tr>
			        }
	              </tbody>
			    </table>
			  : <div> 
			      <Warning/>
			    </div>
			  }
		    </div>
		);
	}
}

export default WorkersDetails;