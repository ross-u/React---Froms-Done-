// src/components/DynamicMovieList.js
import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard';
import AddMovie from './AddMovie';

class DynamicMovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: props.moviesArray,
      showMovies: true
    }
  };

  toggleMovies = () => {
    this.setState({ showMovies: !this.state.showMovies });
  }

  deleteMovie = (movieIndex) => {
    const moviesCopy = this.state.movies;
    moviesCopy.splice(movieIndex, 1);
    this.setState( {movies: moviesCopy} );
  }


  // Method `addMovieHandler` is passed to the child component `AddMovie` 
  // and that component is invoking it and passing a value of the new movie
  addMovieHandler = (newMovie) => {
    const moviesCopy = [...this.state.movies];
    moviesCopy.push(newMovie);
    
    this.setState({ movies: moviesCopy })
  }
  
  
    render() {
      return (
        <div>
          <AddMovie addTheMovie={this.addMovieHandler} />

        <button onClick={this.toggleMovies}>
          Toggle Movies
        </button>

        <ul>
        {
          this.state.showMovies ? 
          this.state.movies.map( (oneMovie, index) => {
            return <ImprovedCard key={index} {...oneMovie} clickToDelete={ ()=> this.deleteMovie(index)} />
          })
          :
          null
        }
        </ul>
      </div>
    )
  }
}

export default DynamicMovieList; 