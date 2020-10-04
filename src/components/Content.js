import React,{useState} from 'react'
import './content.css'
import VideoCard from './VideoCard'

function Content() {

    const [movies,setMovies] = useState(['1','3'])

    return (
        <div className='content'>
            {movies.map(movie =>(
                <VideoCard/>
            ))}
            
           
        </div>
    )
}

export default Content
