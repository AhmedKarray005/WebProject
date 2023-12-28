import React from 'react';
import './hero.css';

function Hero(props) {
  return (
    <>
      <div className="hero">
        <iframe
          title="YouTube Video"
          width="100%"
          height="400px"  
          src="https://www.youtube.com/embed/QvkDDA62-tw?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className='hero-text'>
          <h1>Welcome To DonnorConnect</h1>
          <p>Lend the helping hand get involved</p>
          <a href ="/Donate" className= "fancy"> 
          <span class="top-key"></span>
  <span class="text">Donate Now</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>         

        </div>
      </div>
    </>
  );
}

export default Hero;
