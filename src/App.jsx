import { useState } from 'react'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import LeftSection from "./Components/LeftSetion"
import RightSection from "./Components/RightSection"
import Repostories from "./Components/Repostories"
import Followers from "./Components/Followers"
import Following from "./Components/Following"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'




function App() {

  return (
    <>
      <BrowserRouter>
    
       <Navbar />
        <Main />
        <div className="all">
        <div className="all-min-container">
          <section className="section">
            <LeftSection />

            <Routes>
                <Route path='/' element={<RightSection />} />
                <Route path='/repo' element={<Repostories />} />
                <Route path='follows' element={<Followers />} />
                <Route path='following' element={<Following />} />
            </Routes> 

          </section>
        </div>
        <Footer />
       </div>

      </BrowserRouter>
    </>
  )
}

export default App
