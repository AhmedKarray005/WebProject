import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './component/common/header/Header';
import Home from './component/home/Home';
import Donate from './component/Donate'
import Npo from './component/Npo'
import Blog from './component/blog/Blog'; 
import Contact from './component/contact/Contact';
import './App.css'
import About from './component/about/About';
import PrivateRoute from "./component/PrivateRoute";
import ProfileView from './component/profileView/ProfileView';
import Donation from "./component/Donation/Donation"
import Donators from "./component/Donators"
import DonationPage from './component/Donation/DonationPage';
import DonationPage2 from './component/Donation/DoationPage2';


const App = () => {
  return (
    <BrowserRouter>
    <Header/>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/donate" element={<Donate />} />
    <Route path="/npo" element={<Npo />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/Donation" element={<Donation />} />
    <Route path="/view-donation" element={<DonationPage />} />
    <Route path="/donation-page" element={<DonationPage2 />} />

    <Route
            path="/donators"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <Donators />
              </PrivateRoute>
            }
          />
          <Route
  path="/profileView"
  element={
    <PrivateRoute allowedRoles={['user']}>
      <ProfileView /> 
    </PrivateRoute>
  }
/>

    </Routes>
   
    </BrowserRouter>
    );
    }
    export default App;