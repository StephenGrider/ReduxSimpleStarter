import React from 'react';

const VideoListItem = ({video}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    console.log(imageURL);

    return (
        <li className='list-group-item'>
            <div className='video-list-media'>
                <div className='media-left'>
                    <img className='media-object' src={imageURL}/>
                </div>
                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>    
            </div>
        </li>
    );  
}

export default VideoListItem;