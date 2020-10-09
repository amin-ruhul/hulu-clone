
import React,{useState,useEffect} from 'react'
import './content.css'
import VideoCard from './VideoCard'
import axios from '../axios'


function Content({ selectedOption }) {

    const [movies,setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(selectedOption)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [selectedOption]);

    return (
        <div className='content'>
            {movies.map(movie =>(
                <VideoCard key={movie.id} movie={movie}/>
            ))}
            
           
        </div>
    )
}

export default Content
