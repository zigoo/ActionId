import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {debounce} from 'throttle-debounce';
import Warning from '../Warning/Warning.js';
import {focusInCurrentTarget} from '../../Helpers/helpers.js';

import './styles.css'

class WorkersDetails extends Component {
	_timeoutID;

	constructor(){
		super();
		this.handleAddTool = this.handleAddTool.bind(this)
		this.state = {
			addFormVisible: false,
			newType: '',
			newManufacturer:'',
			newSerialNumber: '',
			isManagingFocus: false
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

    handleAddTool({type,manuf,serialNum}) {
        this.setState({addFormVisible: !this.state.addFormVisible})
    }

    handleDispatchNewTool () {
        
    }

    hide(e) {
        if (!focusInCurrentTarget(e)) {
    	  this.setState({addFormVisible: false})
    	}
    }
	render() {
		const {tools, toolsIds} = this.props;
		const newType = this.state.newType;
		const newManufacturer = this.state.newManufacturer;
		const newSerialNumber = this.state.newSerialNumber;
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
					              onClick={this.handleAddTool}>
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
			                     //{(input) => { this.newTypeInput = input; }}  
			                     placeholder="typ" /></td>

			          <td><input value={this.state.newManufacturer}
			                     onChange={e => this.handleNewManu(e)}
			                     placeholder="producent" /></td>

			          <td><input value={this.state.newSerialNumber}
			                     onChange={e => this.handleSerial(e)}
			                     className="wrk_dt-sn" 
			                     placeholder="numer seryjny"/></td>
			          <td>
			              <button type="submit" className="button-small button-outline" 
				                    onClick={this.handleDispatchNewTool({
				                    	       newType,
				                    	       newManufacturer,
				                    	       newSerialNumber}) }>
				            dodaj
				          </button>
				       </td>
			         </tr>
			        }
	              </tbody>
			    </table>
			  : <Warning />
			  }
		    </div>
		);
	}
}

export default WorkersDetails;