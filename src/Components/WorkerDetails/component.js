import React, { Component } from 'react';

class WorkersDetails extends Component {
	render() {
		const {tools} = this.props;
		return (
			<div className="workersDetails">
			  WorkersDetails  <br/>
			  <div className="workersDetails_desc">
		      <table>
			    <tbody>
				  <tr>
				      <th>Typ</th>
				  	  <th>Producent</th>
					  <th>Serial number</th>
		 		  </tr>	
	             {Object.keys(tools).map((tool,i) => 
	              <tr key={i}>
	                  <td> {tools[tool].type}</td>
					  <td> {tools[tool].manufacturer}</td>
					  <td> {tools[tool].serialNum}</td>
	              </tr> )}
	            </tbody>
			  </table>
			  </div>
			</div>
		);
	}
}

export default WorkersDetails;