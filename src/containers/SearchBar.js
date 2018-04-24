import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Weather} from '../actions/index'
import {bindActionCreators} from 'redux';
class SearchBar extends Component{

  constructor(){
    super();

    this.state = {term: ''};
  }
  
  onchange(e){
    this.setState({term: e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    this.props.Weather(this.state.term);
    this.setState({term : ''})
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}  className = "input-group"  >
        <input value={this.state.term} onChange={this.onchange.bind(this)} className="form-control" placeholder="Enter the city name or zip code" />
      <span className = " input-group-btn">
      <button className = "btn btn-primary" type = "submit" >Search</button>
      </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators ({Weather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

