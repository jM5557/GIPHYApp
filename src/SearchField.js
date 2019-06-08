import React, { Component } from 'react';
import Keys from './keys.config.js';
import axios from 'axios';

class SearchField extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: [],

			searchTerm: '',

			errorMessage: {

				display: false,
				msg: "No gifs found."


			}

		}

		this.searchByTerm = this.searchByTerm.bind(this);

		this.handleSearchField = this.handleSearchField.bind(this);
	}

	searchByTerm () {

		axios.get('https://api.giphy.com/v1/gifs/search?q=' + this.state.searchTerm + '&api_key=' + Keys.GIPHY_API ,
				{ headers: {
					accept: 'image/*'
				}
		})
			.then( (res) => {

				let t = this.state.errorMessage;
				t.display = false;

				this.setState({
					data: res.data.data,
					errorMessage: t
				});

				console.log(res.data.data);

				this.props.updateGiphyList(res.data.data);

			}).catch((err) => {

				let t = this.state.errorMessage;
				t.display = true;

				this.setState({

					errorMessage: t

				});

			});

	}

	handleSearchField (e) {

		this.setState({
			searchTerm: e.target.value
		});

	}

	render () {

		return (

			<div>

				<input type = "text" onChange = { this.handleSearchField } value = { this.state.searchTerm } />

				<button onClick = { this.searchByTerm }>
					Search
				</button>

				{ (this.state.errorMessage.display) && (

					<div className = "error"> { this.state.errorMessage.msg } </div>

				) }

			</div>

		);

	}


}

export default SearchField;