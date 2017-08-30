import React, { Component } from 'react';
import './styles.css'; 

export class Warning extends Component {
	render() {
		return (
			<div className="warning">
				<p>Użytkownik nie posiada narzedzi</p>
				<button className="button-small button-outline">dodaj</button>
			</div>
		);
	}
}


export default Warning;