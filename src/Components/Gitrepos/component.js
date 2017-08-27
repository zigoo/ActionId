import React, { Component } from 'react';
import Loader from '../Loader/Loader.js';
import axios from 'axios';


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
               isLoading: true,
  		   });

	       axios.get(`https://api.github.com/users/${workerName}/repos`)
	            .then( repos => {
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
	            })
	            .catch((error) => console.log(error))    
       }
	}

	render() {
		const {repos, workerName} = this.props;
		return (
			<div className="gitrepos">
				{this.state.isLoading
                 ? <Loader />
				 : <div>
				   Repozytoria github dla {workerName} : <br/>

				   <ul>
	                   {Object.keys(repos).map((repo,i) => 
		               <li key={i}>
		                   {repos[repo].name} 
		                <a href={repos[repo].url}> {repos[repo].url} </a>
		               </li>
	                   )}
	               </ul>
	               </div>
				}
			</div>
		);
	}
}

export default GitRepos;