import React, { Component } from 'react';
import './styles.css';

export class Header extends Component {
	static defaultProps = {
      worker: { id: 1, name: 'Wybierz użytkownika z menu po lewej stronie' }
    };

	render() {
		const {worker} = this.props;
		const params_id = this.props.id;
		return (
			<div className="header">
			  <div className="hdr_span-l">
			   <h6>
				   <span className="wL_sp-l">Imie i nazwisko</span>
				   <span className="wL_sp-r">Ilość sprzetów</span>
				</h6>
			  </div>
			  <div className="hdr_span-r">
			    {params_id !== undefined 
			     ?<p>Szczegóły posiadanego sprzetu dla <b>{worker.name}</b> ID: <b>{worker.id}</b></p>
			     :<p className="screamer">Wybierz użytkownika z menu z lewej strony</p>		  
			    }
			  </div>
			</div>
		);
	}
}

export default Header;
