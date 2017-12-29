import React from "react";

const VideoDetail = ({ video }) => {
  // const video = this.props;

  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-sm-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="embed-responsive-item"
        />
      </div>
      <div className="details">
        <div> {video.snippet.title} </div>
        <div> {video.snippet.description} </div>
      </div>
    </div>
  );
};

export default VideoDetail;
