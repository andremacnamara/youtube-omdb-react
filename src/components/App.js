import React from 'react';

import SearchBar from './SearchBar';
import MovieDetails from './MovieDetails';
import VideoList from './VideoList';

import Container from './styles/Container';

import omdb from '../apis/omdb';
import youtube from '../apis/youtube';

class App extends React.Component {

  state = {
    movie: {},
    videos: []
  };

  onFormSubmit = async term => {
      const response = await omdb.get('/', {
        params: {
            t: term
        }
      });
      console.log(response);

      this.setState({ movie: response.data });

      if(!this.state.movie.Error){
        const youtubeResponse = await youtube.get('/search', {
          params: {
              q: term
          }
        });

        this.setState({ videos: youtubeResponse.data.items });
      }
  };

  render(){
    return (
      <Container>
        <SearchBar onFormSubmit={this.onFormSubmit}/>
        <MovieDetails movie={this.state.movie} />
        <VideoList videos={this.state.videos} />
      </Container>
    )
  }
}

export default App;
