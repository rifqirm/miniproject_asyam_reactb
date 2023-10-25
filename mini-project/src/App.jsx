import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Homepage from "./pages/HalamanUtama/homepage";
import Navbar from "./components/Navbar/navbar.jsx"
import Footer from "./components/Footer/footer";



function App() {

  return (
      <Router>
        <Navbar/>
        <Routes>

          <Route exact path="/" element={<Homepage />} />
          
        </Routes>
        <Footer />
      </Router>
  )

}

export default App
