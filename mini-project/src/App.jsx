import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Homepage from "./pages/HalamanUtama/homepage";
import Navbar from "./components/Navbar/navbar.jsx"
import Footer from "./components/Footer/footer";
import ProductPage from "./pages/Produk/product";


function App() {

  return (
      <Router>
        <Navbar/>
        <Routes>

          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/produkList" element={<ProductPage />} />

        </Routes>
        <Footer />
      </Router>
  )

}

export default App
