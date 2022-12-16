import './normalize.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Layout } from './components/Layout/Layout'
import { CreatePage } from './pages/CreatePage'
import { FilterPage } from './pages/FilterPage'

const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='Create' element={<CreatePage />} />
      <Route path='Filter' element={<FilterPage />} />
    </Route>
  </Routes>
)

export default App
