import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-sm-4 list-group">{videoItems}</ul>;
};

// className for video-item col-md-6

export default VideoList;
