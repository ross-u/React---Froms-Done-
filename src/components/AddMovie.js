// src/components/AddMovie.js
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props){
      super(props);
    
      this.state = { 
        title: '',
        director: '',
        hasOscars: false,
        IMDbRating: ''
      }
  }
/* 
  handleTitleInput = (event) => {
    this.setState({ title: event.target.value })
  }

  handleDirectorInput = (event) => {
    this.setState( { director: event.target.value} )
  }

  handleOscarsCheck = (event) => {
    this.setState( { hasOscars: event.target.checked } )
  }

  handleRatingInput = (event) => {
    this.setState( { IMDbRating: event.target.value} )
  }
 */

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheMovie(this.state);
    // Reset the state
    this.setState({ title: '', director: '', hasOscars: false, IMDbRating: '' });  	
  };

  handleChange(event) {
    event.preventDefault();
    // All our inputs have same `name` as the `state` property name.
    let { name, value } = event.target;
    
    if (name === "hasOscars" && this.state.hasOscars === false) value = true; 
    else if (name === "hasOscars" && this.state.hasOscars === true) value = false;

    this.setState( { [name]: value } );
  }


  render(){
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input name="title" type="text" value={this.state.title} onChange={(e) => this.handleChange(e)} />

            <label>Director:</label>
            <input name="director" type="text" value={this.state.director} onChange={(e) => this.handleChange(e)} />

            <label>Oscar Awarded:</label>
            <input name="hasOscars" type="checkbox" checked={this.state.hasOscars} onChange={(e) => this.handleChange(e)} />

            <label>IMDb Rating:</label>
            <input name="IMDbRating" type="text" value={this.state.IMDbRating} onChange={(e) => this.handleChange(e)} />
            
            <button type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

export default AddMovie;