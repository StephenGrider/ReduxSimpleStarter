import React from 'react';

const VideoDetail = (props) => {
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div></div>
        <div></div>
      </div>
    </div>      
  );
};

export default VideoDetail;
