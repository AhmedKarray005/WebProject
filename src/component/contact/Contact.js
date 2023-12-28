import React from "react" 
import Icons from './Icons'; 
import Card from './Card'; 
import Fedback from "./Fedback";
import img from "../images/pricing.jpg"
import './contact.css';
import Back from "../common/Back"
import Footer from "../common/footer/Footer";

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
        <Icons/> 
        <div >
    <Card/>  </div>
    <Fedback/> 
        </div>
        <Footer />

      </section>
    </>
  )
}

export default Contact
