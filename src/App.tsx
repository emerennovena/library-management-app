import { useState } from 'react'
import readingImage from './assets/reading.svg'
import './App.css'

function App() {

  return (
    <>
    <div className='app-container'>
      <div className="separator">
        <h2 style={{ color: 'black', marginBottom: '800px', fontFamily: 'Consolas', marginLeft: '0px', fontSize: 'xx-large'}}>Hello admin!</h2>
        <nav className='nav-sidebar'>
        <br/>
        <button className="nav-button">Book Lending</button>
        <br/>
        <button className='nav-button'>Book Return</button>
        <br/>
        <button className='nav-button'>Book List</button>
        <br/>
        <button className='nav-button'>Edit Books</button>
        <br/>
        <button className='nav-button'>Account</button>
        </nav>
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
