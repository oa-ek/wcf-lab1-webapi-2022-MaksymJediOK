import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMovieData } from '../../store/reducers/movies.slice'
import { Container } from '../Hero/Hero.styles'
import { SearchBar } from './CommonList.styles'
import { FaSearch } from 'react-icons/fa'
import Select from 'react-select'
import { FilterCard } from './FilterCard'
import { Card } from '../MovieList/components/Card/Card'

export const CommonList = () => {
  const [search, setSearch] = useState('')
  const [year, setYear] = useState(2022)
  const [rating, setRating] = useState(1)
  const [selectedOptions, SetSelectedOptions] = useState({})
  console.log(year)
  const options = [
    { value: 1, label: 'Drama' },
    { value: 2, label: 'Action' },
    { value: 3, label: 'Adventure' },
    { value: 4, label: 'Comedy' },
    { value: 5, label: 'Detective' },
  ]
  const dispatch = useDispatch()
  const movieList = useSelector((state) => state.movie.list)
  console.log(movieList)
  useEffect(() => {
    dispatch(loadMovieData())
  }, [dispatch])

  const handleSelectChange = (options) => {
    SetSelectedOptions(options)
  }

  return (
    <Container>
      <SearchBar>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon1'>
            <FaSearch style={{ cursor: 'pointer' }} />
          </span>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Search'
            aria-label='Search'
            aria-describedby='basic-addon1'
          />
          <input
            onChange={(e) => setYear(e.target.value)}
            type='number'
            className='form-control'
            placeholder='Year'
            aria-label='Year'
            aria-describedby='basic-addon1'
          />
        </div>
        <div className='input-group mb-3'>
          <input
            onChange={(e) => setRating(e.target.value)}
            type='number'
            className='form-control'
            placeholder='Rating'
            aria-label='Rating'
            aria-describedby='basic-addon1'
          />
        </div>
      </SearchBar>
      <Select options={options} onChange={handleSelectChange} />
      <div className='row g-3 p-3'>
        {movieList &&
          movieList
            .filter((item) => item.rating >= rating)
            .filter((item) => item.releaseYear === year)
            .filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.title.toLowerCase().includes(search)
            })
            .map((item) => {
              return <FilterCard key={item.title} {...item} />
            })}
      </div>
    </Container>
  )
}
