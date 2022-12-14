import React, { useEffect, useState } from 'react'
import { Hero } from '../components/Hero/Hero'
import { MovieList } from '../components/MovieList/MovieList'
import axios from 'axios'

export const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // axios.get('https://localhost:7225/api/Genre').then((response) => {
    //   console.log(response.data)
    // })
  }, [])

  return (
    <>
      <Hero />
      <MovieList />
    </>
  )
}
