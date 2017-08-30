import React, { Component } from 'react';
import Loader from '../Loader/Loader.js';
import axios from 'axios';

import './styles.css'

class GitRepos extends Component {
	constructor(){
		super();
		this.state = {
		  isLoading: false
		}
	}
	componentDidUpdate(nextProps) {
	   let {workerName, dispatch} = this.props;
	   let reposList = [];

       if (nextProps.id !== this.props.id) {
           this.setState({
               isLoading: true
  		   });

	       axios.get(`https://api.github.com/users/${workerName}/repos`)
	            .then( repos => {
	            	//eslint-disable-next-line 
			        repos.data.map(repo => {
		        	    reposList.push({
		        	      name: repo.name,
		        	      url: repo.url
		        	    })
			        }) 

			        dispatch({
		                type: 'axiosToRedux',
		                reposList,
			        })

			        this.setState({
	                    isLoading: false
	  		        });
	  		         return;
	            })
	            .catch((error) => console.log(error))    
       }
	}

	render() {
		const {repos, workerName} = this.props;
		return (
			<div className="gitrepos">
			   <div className="rep_desc">
				 {this.state.isLoading
				  ? <Loader />
				  : <div>
				      <p className="h100">Repozytoria github dla <b>{workerName}</b></p>
				      <table>
				        <tbody>
				          <tr>
				            <th>nazwa repozytorium</th>
				            <th><span className="wL_sp-r">link</span></th>
				          </tr>
				        {Object.keys(repos).map((repo,i) =>
				          <tr key={i}>
					        <td><span className="wL_sp-l">{repos[repo].name}</span></td>
					        <td><span className="wL_sp-r"><a href={repos[repo].url} target="_blank"> {repos[repo].url}</a></span></td>
				          </tr>		 
					     )}
					    </tbody>
					  </table>
				</div>}
			  </div>
			</div>
		);
	}
}

export default GitRepos;