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
				 {this.state.isLoading || repos.length===0
				  ? <Loader />
				  : <div>
				      <div className="row" >
				        <div className="column">
 				          <p className="h100">Repozytoria github dla <b>{workerName}</b></p>
   			            </div>
				      </div>
				      <div className="row">
				        <div className="column">
					      <p className="gr_rdsc-unl">nazwa repozytorium</p>
				          <div className="user">
				            <ul>
				              {Object.keys(repos).map((repo,i) => 
				                <li key={i}>{repos[repo].name}</li>
					          )}
					        </ul>
					      </div>
				        </div>
					    <div className="column">
   			              <p className="gr_rdsc-unl">link</p>
				          <div className="url">
				            <ul>
						      {Object.keys(repos).map((repo,i) => 
				                <li key={i}><a href={repos[repo].url} target="_blank"> {repos[repo].url}</a></li>
					          )}
						    </ul>
				          </div>
				        </div>
				      </div>
				    </div>
         		}
			  </div>
			</div>
		);
	}
}

export default GitRepos;
