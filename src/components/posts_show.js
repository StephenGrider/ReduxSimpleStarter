import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    
  }

  render() {
    
    const { post } = this.props;
    console.log(post);
    return (
      <div>
        <h3></h3>
        <h6>Categories: </h6>
        <p>Content</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ ownProps.match.params.id ] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);