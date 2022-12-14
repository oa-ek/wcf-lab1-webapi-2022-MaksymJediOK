import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { MoviesAPI } from '../../config'
import { Container, SelectWrapper, WrapperInput } from './CreateInput.styles'
import './Input.css'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { setGenrePack } from '../../store/reducers/genre.slice'

export const CreateInput = () => {
  const dispatch = useDispatch()
  const genrePack = useSelector((state) => state.genre)
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  const baseValue = {
    title: 'string',
    description: 'string',
    posterPath: 'string',
    rating: 0,
    releaseYear: 0,
    duration: 0,
    countryId: 0,
    genres: [0],
  }

  const SendRequest = (movie = baseValue) => {
    axios
      .post(MoviesAPI, movie)
      .then((response) => console.log(response))
      .catch((errors) => console.log(errors))
  }

  const onSubmit = (data) => {
    console.log(data)
    const genres = genrePack
    const dataToPass = { ...data, genres }
    console.log(dataToPass)
    SendRequest(dataToPass)
    reset()
  }

  const options = [
    { value: 1, label: 'Drama' },
    { value: 2, label: 'Action' },
    { value: 3, label: 'Adventure' },
    { value: 4, label: 'Comedy' },
    { value: 5, label: 'Detective' },
  ]

  const handleSelectChange = (options) => {
    let basicGenre = []
    options.forEach((obj) => {
      basicGenre.push(obj.value)
    })
    dispatch(setGenrePack(basicGenre))
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <WrapperInput>
          <label>
            Title
            <input
              type='text'
              {...register('title', {
                required: 'This field is required',
              })}
            />
          </label>
          <div>{errors?.title && <p>{errors?.title?.message}</p>}</div>
        </WrapperInput>
        <WrapperInput>
          <label>
            Description
            <input
              type='text'
              {...register('description', {
                required: 'This field is required',
              })}
            />
          </label>
          <div>
            {errors?.description && <p>{errors?.description?.message}</p>}
          </div>
        </WrapperInput>
        <WrapperInput>
          <label>
            posterPath
            <input
              type='text'
              {...register('posterPath', {
                required: 'This field is required',
              })}
            />
          </label>
          <div>
            {errors?.posterPath && <p>{errors?.posterPath?.message}</p>}
          </div>
        </WrapperInput>
        <WrapperInput>
          <label>
            rating
            <input
              type='number'
              {...register('rating', {
                required: 'This field is required',
              })}
            />
          </label>
          <div>{errors?.rating && <p>{errors?.rating?.message}</p>}</div>
        </WrapperInput>
        <WrapperInput>
          <label>
            releaseYear
            <input
              type='number'
              {...register('releaseYear', {
                required: 'This field is required',
              })}
            />
          </label>
          <div>
            {errors?.releaseYear && <p>{errors?.releaseYear?.message}</p>}
          </div>
        </WrapperInput>
        <WrapperInput>
          <label>
            country
            <input
              type='number'
              {...register('countryId', {
                required: 'This field is required',
                maxLength: {
                  value: 3,
                  message: 'Only less than four',
                },
              })}
            />
          </label>
          <div>{errors?.countryId && <p>{errors?.countryId?.message}</p>}</div>
        </WrapperInput>

        <input className='btn-submit' type={'submit'} />
      </form>

      <SelectWrapper>
        <Select options={options} onChange={handleSelectChange} isMulti />
      </SelectWrapper>
    </Container>
  )
}
