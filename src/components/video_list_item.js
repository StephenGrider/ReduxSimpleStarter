import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  // console.log({video});
  // const onVideoSelect = props.onVideoSelect
  //const video = props.video;//This will be an array of videos
  // we are going to use some properties  from what video has like etag, snippet etc
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    // video={this.state.selectedVideo}
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt="surfboard " />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
