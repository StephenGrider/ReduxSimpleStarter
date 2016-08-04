import React from 'react';
import VideoListItem from './video_list_item';

//doesn't have any state, so doesn't need class, function is enough
const VideoList = (props) => {
	//lists were built by map, don't by forloops
	const videoItems = props.videos.map((video) => {
		return (
		<VideoListItem
			onVideoSelect={props.onVideoSelect}
			key ={video.etag}
			video={video} />
		);
	});

	return (
		<ul className="col-md-4" list-group>
			 {videoItems}
		</ul>
	);
};

export default VideoList;
