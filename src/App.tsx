import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import readingImage from './assets/reading.svg'
import './App.css'
import BookLending from './pages/BookLending'

function App() {

  return (
    <Router>
    <div className='app-container'>
      <div className="separator">
        <nav className='nav-sidebar'>
        <Link to="/">
        <button className='nav-button'>Home</button>
        </Link>
        <br/>
        <Link to="/lending">
        <button className="nav-button">Book Lending</button>
        </Link>
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
      <Routes>
        <Route path="/" element={
        <>
        <h1 style={{ color: 'black', marginBottom: '100px', fontFamily: 'Consolas, monospace'}}>Welcome</h1>
        <div className="image">
          <img src={readingImage} 
    
          className="logo" 
          alt="logo"
          style={{width: 800, height: 600}}
          />
        </div>
        </>
        } />
    
    
      <Route path="/lending" element= {<BookLending />} />
      </Routes>
      </div>

    </div>
    </Router>
  )
}

export default App
