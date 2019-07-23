import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './views/about'
import Game from './views/game'
import Home from './views/home'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <nav>
            <div className="nav-elements">
              <Link to="/">Home</Link>

              <Link to="/game/">Game</Link>

              <Link to="/about/">About</Link>
            </div>
          </nav>
        </header>
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/game/" component={Game} />
        </div>
      </Router>
    </div>
  )
}

export default App
