import React from 'react';

const VideoListItem = ({video}) => {
  // const video = porps.video; identtical to what is being passed in instead of
  // props and use props.video. It says there is a property of video coming in
  // so declare it with a variable of the same name
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img className="mdeia-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;
