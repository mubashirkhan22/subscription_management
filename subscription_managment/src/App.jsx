// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import FirstHader from './heder/FirstHader';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/heder' element={<FirstHader />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
