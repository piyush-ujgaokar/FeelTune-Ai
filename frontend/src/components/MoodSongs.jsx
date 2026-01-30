import React, { useState } from 'react'
import './moodSongs.css'

const MoodSongs = ({Songs}) => {

    const [isPlaying, setIsPlaying] = useState(null)

    const handlePlayPause=(index)=>{
        if(isPlaying === index){
            setIsPlaying(null)
        }else{
            setIsPlaying(index)
        }
    }

  return (
    <div className='mood-songs'> 
        <h2>Recommended Songs</h2>
        {Songs.map((song, index) => (
            <div className='main-box' key={index}>
                <div className="title">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                </div>
                <div className="play-pause-btn">
                   { 
                   isPlaying === index &&
                    <audio src={song.songUrl} style={{
                        display:'none'
                    }} autoPlay={isPlaying===index}>
                    </audio>
                    }
                    
                    <button onClick={()=>{
                        handlePlayPause(index)
                    }}>{isPlaying== index ? <i className="ri-pause-line"></i>: <i className="ri-play-fill"></i>}</button>
                </div>
            </div>
        ))}    
     </div>
  )
}

export default MoodSongs