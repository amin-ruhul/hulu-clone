import React,{ forwardRef } from 'react'
import './videocard.css'
import TextTruncate from 'react-text-truncate';
import {ThumbUpSharp} from '@material-ui/icons';


const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className='video-card'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster"/>
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h3>{movie.title || movie.original_name}</h3>
            <p className='video-card-stats'>
            {movie.media_type && `${movie.media_type} .`}
            {movie.release_date || movie.first_air_date} .
            <ThumbUpSharp/>{' '}
            {movie.vote_count}
            </p>
        </div>
    )
});

export default VideoCard
