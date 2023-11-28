import React, { useState } from 'react';
import YouTube from 'react-youtube';

const PlayableYouTubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeVideoLink = 'https://www.youtube.com/watch?v=6RMcWdQNf9c'; // Replace with your YouTube video link
  const videoId = youtubeVideoLink.split('v=')[1]; // Extract the video ID from the link

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  const handleBackClick = () => {
    setIsPlaying(false);
  };
  const opts = {
    height: '590',
    width: '640',
    
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {isPlaying ? (
        <>
        <YouTube videoId={videoId} opts={opts} />
        <div>
         
          <button onClick={handleBackClick}>
            <img src='/img/thumbs/arrow_507257.png' className='pt-in-3'/>
          </button>
        </div>
        </>
      ) : (
        <div className='play-yt' >
        {/* <img src="/assets/images/video/play-btn.png" onClick={handlePlayClick} alt='play button ' className='pl-btn pl-btn2'/> */}
          <button className='pl-btn pl-btn2 '  onClick={handlePlayClick}>Virtual Tour</button>
        </div>
      )}
    </div>
  );
};

export default PlayableYouTubeVideo;
