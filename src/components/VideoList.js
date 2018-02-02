import React from 'react';
import VideoListItem from './VideoListItem.js';

const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
      })}
    </ul>
  );
};

export default VideoList;