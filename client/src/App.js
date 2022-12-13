import {useEffect, useState} from "react";


function App() {
    const url = 'https://localhost:7225/api/Genre'
    const [genres, setGenres] = useState([])

    useEffect(() => {
      fetch(url)
          .then(response => response.json())
          .then(data => {
            setGenres(data)
            console.log(data)
          })
          .catch((error) => {
            console.log(error)
          })
    }, [])
  return (
    <div className='App'>
        some content
    </div>
  )
}

export default App
