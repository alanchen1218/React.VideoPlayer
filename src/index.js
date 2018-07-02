import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// BELOW need to include the path for files we make ourselves
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBSN0JqRGWAZrtwtAFnlhzII7_d_R7x55I'



// create new component, this should produce HTML
// NEW different way of calling function, 'fat arrow'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('fortnite');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
       this.setState({
         videos: videos,
         selectedVideo: videos[0]
        })
       //if the term and values are named the same ^^
       // this.setState({videos: videos})
     });
  }

  render() {
    const videoSearch = _.debounce((term) =>  { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos} />
      </div>
    );
  }
}

// take this component's generated HTML and put into page(DOM)

// App is just a class of a component
// to create an instance, wrap it with JSX tag(below)
// two parameters, (1)what you want (2)where you want it.

ReactDOM.render(<App />, document.querySelector('.container'));
