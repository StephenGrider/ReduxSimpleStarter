import React from 'react';
import VideoListItem from './video_list_item';

// key = {video.etag} provides a unique key for each element in the list
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key = {video.etag} video={video} />
  })


  return (
    <ul className="col-md-4 list-group">
      {videoItems} 
    </ul>
  )
}

export default VideoList;
