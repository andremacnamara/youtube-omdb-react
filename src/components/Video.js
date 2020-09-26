import React from 'react';
import YoutubeVideo from './styles/YoutubeVideo';
const Video = ({ video }) => {
    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <YoutubeVideo>
            <iframe src={videoSrc} title={video.title} />
        </YoutubeVideo>
    )

};

export default Video;