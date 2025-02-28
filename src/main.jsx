// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import {createTheme, ThemeProvider} from '@mui/material/styles'
// import { Provider } from 'react-redux'
// import store from './app/store'

// const store ceateStore()

// require('dotenv').config();
const theme = createTheme({})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    {/* </Provider>, */}
  </React.StrictMode>,
)
