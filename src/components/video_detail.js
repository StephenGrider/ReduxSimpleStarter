import React from 'react'; 

const VideoDetail = ({video}) => {
  if(!video) return <div>Loading...</div>
  const videoId = video.id.videoId; 
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
      <div className="video-detail col-md-8">
        <div id ='video-container' className ="emed-responsive embed-responsive-16by9" >
          <iframe id = 'video-playback'className = "embed-responsive-item video-frame"src={url}></iframe>
        </div>
        <div className ='details'>
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
  )
};


export default VideoDetail; 