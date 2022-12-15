import React, { useEffect, useState } from 'react'
import {
  Container,
  MoviesButton,
  MoviesTitle,
  MoviesTop,
} from './MovieList.styles'
import axios from 'axios'
import { Card } from './components/Card/Card'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('https://localhost:7225/api/Movie').then((response) => {
      setMovies(response.data)
      console.log(response.data)
    })
  }, [])
  return (
    <>
      <Container>
        <MoviesTop>
          <MoviesTitle>New Movies</MoviesTitle>
          <MoviesButton>Watch all</MoviesButton>
        </MoviesTop>
        <div className='row g-3'>
          {movies &&
            movies.map((mov) => {
              return <Card key={mov.title} {...mov} />
            })}
        </div>
      </Container>
    </>
  )
}
