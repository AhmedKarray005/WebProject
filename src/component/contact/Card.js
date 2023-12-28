import React from 'react';
import phone from "../images/PHONE.png";
import EMAIL from "../images/EMAIL.png";
import position from "../images/position.png";
import HAND from "../images/HAND.png"
import "./contact.css";

export default function Card() {
 return (
    <div className="flex">
      {/* Left Card */}
      <div className="h-52 ml-4 float-left w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl" id='leftcard'>
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <h5 className="text-center block font-sans text-xl font-semibold text-blue-gray-900 antialiased">
              Reach Us At
            </h5>
          </div>
          <ul>
            <li className="mt-2 flex items-center">
              <img src={phone} alt="phone" className="mr-2 max-w-full h-auto" style={{ maxWidth: '20px' }} />
              <span>+216 93940755</span>
            </li>
            <li className="mt-2 flex items-center">
              <img src={EMAIL} alt="email" className="mr-2 max-w-full h-auto" style={{ maxWidth: '30px' }} />
              <span>Donation@gmail.com</span>
            </li>
            <li className="mt-2 flex items-center">
              <img src={position} alt="location" className="mr-2 max-w-full h-auto" style={{ maxWidth: '15px' }} />
              <span>Avenue de la bourse 1053 , lac 2, Tunisia , Tunis</span>
            </li>
          </ul>
        </div>
      </div>


      

      {/* Right Card */}
      <div className="mr-4 w-96 text-center float-right w-1/3 flex-col rounded-xl bg-white text-gray-700 shadow-2xl" id='leftcard'>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold text-blue-gray-900 antialiased">
            Branding & Collaboration
          </h5>
          <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
 <img
    src={HAND}
    alt="location"
    className="mr-2 max-w-full h-auto"
    style={{ maxWidth: '80px' }}
 />
</div>
          </div>
          
          <i className="fa fa-handshake fa-2xl"></i>
          <div className="text-left mt-4">
            <span>
              <i className="fa fa-envelope mr-2"></i>{" "}
            </span>
            <div id='mail'>
            <img src={EMAIL} alt="email" className="mr-4 max-w-full h-auto" style={{ maxWidth: '40px' }} />
            <span>DonnorConnectemail@gmail.com</span>
           
            </div>
          </div>
          <div className="mt-2 text-left">
            <span>
              <i className="fa-solid fa-map-pin mr-2"></i>{" "}
            </span>
            <div id='mail'>
            <img src={position} alt="email" className="mb-5 mr-4 max-w-full h-auto" style={{ maxWidth: '30px' }} />
             Supporting our collaborations that inspire hope and transform lives.
            
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}