import { useState } from 'react'
import readingImage from './assets/reading.svg'
import './App.css'

function App() {

  return (
    <>
    <div className='app-container'>
      <div className="separator">
        <h2 style={{ color: 'black', fontFamily: 'Consolas'}}>Hello admin!</h2>
      </div>

      <div className="rest-screen">
      <h1 style={{ color: 'black', marginBottom: '100px', fontFamily: 'Consolas'}}>Welcome</h1>
      <div className="image">
        <img src={readingImage} 
        className="logo" 
        alt="logo"
        style={{width: 800, height: 600}}
        />
      </div>
      </div>
      </div>
    </>
  )
}

export default App
