import React, { Component } from 'react';

class GiphyGif extends Component {

	render () {

		return (

				<a href = { this.props.data.embed_url } className = "gif_thumb"> 
					<img alt = { this.props.data.title } src = { this.props.data.images.preview_gif.url } />
				</a>

		)

	}

}

export default GiphyGif;