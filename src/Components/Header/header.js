import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

export class Header extends Component {
	static defaultProps = {
      worker: { id: 1, name: 'Wybierz użytkownika z menu z lewej strony' }
    };
    
	render() {
		const {worker} = this.props;
		return (
			<div className="header">
			  <div className="hdr_span-l">
			   <h6>
				   <span className="wL_sp-l">Imie i nazwisko</span>
				   <span className="wL_sp-r">Ilość sprzetów</span>
				</h6>
			  </div>
			  <div className="hdr_span-r">
			    <p>Szczegóły posiadanego sprzetu dla <b>{worker.name}</b> ID: <b>{worker.id}</b></p>			  
			  </div>
			</div>
		);
	}
}

function mapStateToProps(state,props) {
	console.log(state.workers.workersList[props.id])
	return {
		worker: state.workers.workersList[props.id]
	}
}

export default connect(mapStateToProps)(Header);
