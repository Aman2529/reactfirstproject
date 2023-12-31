import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/home.scss";
import "./Styles/footer.scss";
import "./Styles/contact.scss";
import "./Styles/mediaquery.scss"



const App = () => {
  return (
    <>
      <Router>
      <Header/>
      <Home/>
              <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Services" element={<Services/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App