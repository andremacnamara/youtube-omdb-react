import React from 'react';
import Video from './Video';
import VideosList from './styles/VideosList';
import { useSpring, animated } from 'react-spring';

const VideoList = ({ videos }) => {
    const renderedList = videos.map((video) => {
        return <Video key={video.id.videoId} video={video}/>;
    });

    const fade = useSpring ({ from: { opacity: 0 }, opacity: 1});

    return <VideosList>{renderedList}</VideosList>
};

export default VideoList;