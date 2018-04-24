import React, { Component } from "react";
import { connect } from 'react-redux';
import _ from 'lodash';

import {allposts} from '../actions/index';
 class PostIndex extends Component {

   componentDidMount(){
     this.props.allposts();
   }
    renderList(){
      return _.map(this.props.posts , post => {
        return (
            <li key = {post.id} className= "list-group-item" >
            {post.title}
            </li>
        );
      } );
    }
  render() {
    console.log(this.props.posts)
    return (
      <div>
        <h2> Blog Posts!! </h2>
        <ul className ="list-group">
        {this.renderList()}
        </ul>
        <div className="card card-outline-danger mb-3 text-center">
          <div className="card-block">
            <blockquote className="card-blockquote">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps , { allposts })(PostIndex)

















