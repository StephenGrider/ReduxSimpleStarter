import React, {Component} from 'react';

export default class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const video = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;
        const imageUrl = video.snippet.thumbnails.default.url;

        return (
            <li className={"list-group-item"} onClick={() => onVideoSelect(video)}>
                <div className={"video-list media"}>
                    <div className={"media-left"}>
                        <img className={"media-object"} src={imageUrl} alt={"video"}/>
                    </div>

                    <div className={"media-body"}>
                        <div className="media-heading">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}