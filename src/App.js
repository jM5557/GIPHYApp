import React from 'react';
import SearchField from './SearchField';
import GiphyGif from './GiphyGif';

class App extends React.Component {

  constructor (props) {

    super(props);

    this.state = {

      giphy_list: []

    }


    this.clearGiphyList = this.clearGiphyList.bind(this);
    this.updateGiphyList = this.updateGiphyList.bind(this);

  }

  clearGiphyList () {

    this.setState({

      giphy_list: []

    });

  }

  updateGiphyList (arr) {

    this.setState({

      giphy_list: arr

    });

  }

  render () {

    let gifs = this.state.giphy_list.map( (g, i) => {

      return (<GiphyGif key = { i } data = { g } />);

    });

    return (
      <div className="app">

        <div className="search-bar">

          <SearchField updateGiphyList = { this.updateGiphyList } />

        </div>

        <div className = "body-content">

        { (this.state.giphy_list.length > 0) && (
          
          <div className = "top_controls_bar">

            <button onClick = { this.clearGiphyList }>Clear</button>

          </div>

        ) }

          { gifs }
        </div>

      </div>
    );

  }


}

export default App;
