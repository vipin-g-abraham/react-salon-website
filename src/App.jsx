import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Home';
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </div>
   
  )
}

export default App
