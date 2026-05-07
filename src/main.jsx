import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './App.jsx' // Make sure this matches your filename
import './index.css' // This is the file where you put the @tailwind lines

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
)
