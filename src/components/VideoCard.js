import React from 'react'
import './videocard.css'

function VideoCard() {
    return (
        <div className='video-card'>
            <img src="https://image.tmdb.org/t/p/original//kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg" alt=""/>
            <p>This is movie about...</p>
            <h3>Movie title</h3>
            <p>Date and Like</p>
        </div>
    )
}

export default VideoCard
