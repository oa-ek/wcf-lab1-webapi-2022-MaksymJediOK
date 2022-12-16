import React from 'react'
import axios from 'axios'
import { MoviesAPI } from '../../../../config'
import { useDispatch } from 'react-redux'
import { loadMovieData } from '../../../../store/reducers/movies.slice'

export const Card = (props) => {
  const dispatch = useDispatch()
  const { id, title, rating, posterPath, releaseYear, country } = props
  const handleDelete = (id) => {
    axios
      .delete(MoviesAPI + `/${id}`)
      .then((response) => {
        dispatch(loadMovieData())
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <div className='col-3'>
        <div className='card' style={{ width: 18 + 'rem' }}>
          <img src={posterPath} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>
              {releaseYear} {rating}
            </p>
            <button onClick={() => handleDelete(id)}> Delete {id}</button>
          </div>
        </div>
      </div>
    </>
  )
}
