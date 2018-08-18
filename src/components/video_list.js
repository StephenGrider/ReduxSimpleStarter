import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map(video=> <VideoListItem  key = {video.etag} video={video} onVideoSelect = {props.onVideoSelect} />)
    return (
        <ul className="col-xs-12 col-md-4 list-group">
          {videoItems}
        </ul>
    );
}

export default VideoList; 