import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({playState,setPlay}) => {
    const statehere=playState;
    console.log(playState);
    function handleClick(){
        setPlay(false);
    }
  return (
    <div className={`video-player ${playState? '' : 'hide'}`} onClick={handleClick}>
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
