import React from 'react'
import {CssBaseline} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
// import Home from './Home'
// import Movies from './Movies'


const App = () => {
  return (
    <div>
      <CssBaseline />
      <main>
        <Routes>
        <Route exact path='/' element={<h1>Movies</h1>} />
        <Route exact path='/profile/:id' element={<h1>Profile</h1>} />
        <Route exact path='/movie/:id' element={<h1>Movie Information</h1>} />
        <Route exact path='/actors/:id' element={<h1>Actors</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
