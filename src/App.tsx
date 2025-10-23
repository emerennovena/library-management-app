import { useState } from 'react'
import readingImage from './assets/reading.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="separator">
        <h2>Hello admin!</h2>
      </div>
      <div className="rest-screen">
      <h1 style={{ color: 'black'}}>Welcome</h1>
      <div className="image">
        <img src={readingImage} 
        className="logo" 
        alt="logo"
        style={{ width: '2000px', height: '400px'}} 
        />
      </div>
        </div>
    </>
  )
}

export default App
