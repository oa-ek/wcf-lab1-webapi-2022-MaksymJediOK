import React from 'react'

export const Card = (props) => {
  const { title, rating, posterPath, releaseYear, country } = props
  return( <>
      <div className='col-3'>
        <div className="card" style={{width:18+'rem'}}>
          <img src={posterPath} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{releaseYear}    {rating}</p>
            </div>
        </div>
      </div>
  </>)
}
