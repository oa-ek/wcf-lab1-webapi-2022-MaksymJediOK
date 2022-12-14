import './normalize.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Layout } from './components/Layout/Layout'

function App() {

  // useEffect(() => {
  //   fetch(url)
  //       .then(response => response.json())
  //       .then(data => {
  //         setGenres(data)
  //         console.log(data)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  // }, [])
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
