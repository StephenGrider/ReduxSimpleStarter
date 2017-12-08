import React, { Component } from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {
const videoItems = props.video.map((video, i) => {
  return <VideoListItem 
  onVideoSelect ={props.onVideoSelect}
  video={video} 
  key={video.etag} />
});
return (
<ul className="col-md-4 list-group"> 
{videoItems}
</ul>
);
};

export default VideoList;