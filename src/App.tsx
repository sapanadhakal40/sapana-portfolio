import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
    <Router>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
    
      </Routes>
    </Router>
    </div>
  )
}

export default App
