import React from 'react'
import './navbar.css'
import requests from '../requests'

function Navbar({ setSelectedOption }) {
    return (
        <div className='navbar'>
           <h3 onClick={()=> setSelectedOption(requests.fetchTrending)}>Trending</h3>
           <h3 onClick={()=> setSelectedOption(requests.fetchTopRated)}>Top Rated</h3>
           <h3 onClick={()=> setSelectedOption(requests.fetchActionMovies)}>Action</h3>
           <h3 onClick={()=> setSelectedOption(requests.fetchComedyMovies)}>Comedy</h3>
           <h3 onClick={()=> setSelectedOption(requests.fetchSciFi)}>Si-Fi</h3>
           <h3 onClick={()=> setSelectedOption(requests.fetchHorrorMovies)}>Horror</h3>
           <h3 onClick={()=> setSelectedOption(requests.fetchMystery)}>Mystery</h3>
           <h3 onClick={()=> setSelectedOption(requests.fetchRomanceMovies)}>Romance</h3>
           <h3 onClick={()=> setSelectedOption(requests.fetchWestern)}>Western</h3>
           <h3 onClick={()=> setSelectedOption(requests.fetchAnimation)}>Animation</h3>
        </div>
    )
}

export default Navbar
