import React, { useEffect } from 'react'
import {
  Container,
  MoviesButton,
  MoviesTitle,
  MoviesTop,
} from './MovieList.styles'
import { Card } from './components/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { loadMovieData } from '../../store/reducers/movies.slice'
import { Link } from 'react-router-dom'

export const MovieList = () => {
  const dispatch = useDispatch()
  const movieList = useSelector((state) => state.movie.list)
  useEffect(() => {
    dispatch(loadMovieData())
  }, [dispatch])
  console.log(movieList)
  return (
    <>
      <Container>
        <MoviesTop>
          <MoviesTitle>New Movies</MoviesTitle>
          <MoviesButton>
            <Link to='/Filter'>Watch All</Link>
          </MoviesButton>
        </MoviesTop>
        <div className='row g-3'>
          {movieList &&
            movieList.map((mov) => {
              return <Card key={mov.title} {...mov} />
            })}
        </div>
      </Container>
    </>
  )
}
