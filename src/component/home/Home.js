import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Footer from '../common/footer/Footer';
import Information from "./information/Information"
const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Information/>
      <Footer/>
      
    </>
  )
}

export default Home
