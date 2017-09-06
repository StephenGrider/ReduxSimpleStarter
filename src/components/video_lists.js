import React, { Component } from 'react';

class VideoList extends Component {
  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.props.videos.length}
      </ul>
    )
  }
}

export default VideoList