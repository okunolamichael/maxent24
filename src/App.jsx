import React from 'react'
import {CssBaseline} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
import {Actors, MovieInformation, Movies, NavBar, Profile} from './components/index'


const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
        <Route exact path='/' element={<Movies />} />
        <Route exact path='/profile/:id' element={<Profile />} />
        <Route exact path='/movie/:id' element={<MovieInformation />} />
        <Route exact path='/actors/:id' element={<Actors />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
