import React, { useState } from 'react';
import img1 from '../img1.jpeg';
import img2 from '../img2.jpeg';
import img3 from '../img3.jpeg';
import './home.css';
import { Link } from 'react-router-dom';

const slidesData = [
  { id: 1, src: img1, caption: 'Caption 1o' },
  { id: 2, src: img2, caption: 'Caption Two' },
  { id: 3, src: img3, caption: 'Caption Three' },

];

const Slideshow = ({ slidesData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (n) => {
    setCurrentSlide((prev) => (n + slidesData.length) % slidesData.length);
  };

  const goToNext = () => {
    goToSlide(currentSlide + 1);
  };

  const goToPrev = () => {
    goToSlide(currentSlide - 1);
  };

  return (
    <div className="slideshow-container">
      {slidesData.map((slide, index) => (
        <div key={slide.id} className={`mySlides ${index === currentSlide ? 'active':'' }`}>
          <div className="numbertext">{index + 1} / {slidesData.length}</div>
          <img src={slide.src} style={{ width: '100%' }} alt={slide.caption} />
          <div className="text">{slide.caption}</div>
        </div>
      ))}

      <div className="prev" onClick={goToPrev}>&#10094;</div>
      <div className="next" onClick={goToNext}>&#10095;</div>

      <div style={{ textAlign: 'center' }}>
        {slidesData.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default function Home(){
  return (
    <div>
      <div class="alert-box">
    <span class="badge">Announcement</span> 
    <div className="alertmessage">
    <p>1. League for June to September 2024 is now available!!</p>
    <p>2. Tournament for April is now available!!</p>
    <p></p>
    </div>
  </div>  
  <div>
        <Link to="/register">
          <button class="registerbutton">Register Now!!</button>
        </Link>
      </div>
  <div className="slidebox">
    <div className="slideshow">
       <Slideshow slidesData={slidesData} />
       </div>
      <div className="container">
        <div className="table">
          <div className="table-header">
          <div className="header__item"><div id="position"  className="filter__link" >Position</div></div>
            <div className="header__item"><div id="Team"  className="filter__link">Team</div></div>
            <div className="header__item"><div id="won"  className="filter__link">Won</div></div>
            <div className="header__item"><div id="drawn"  className="filter__link">Drawn</div></div>
            <div className="header__item"><div id="lost"  className="filter__link">Lost</div></div>
            <div className="header__item"><div id="goal"  className="filter__link">Goal</div></div>
            <div className="header__item"><div id="points"  className="filter__link">Points</div></div>
            
          </div>
          <div className="table-content">	
          <div className="table-row">
      <div className="table-data">1</div>
      <div className="table-data">Forest Rangers SC</div>
      <div className="table-data">3</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">11</div>
    </div>
    <div className="table-row">
      <div className="table-data">2</div>
      <div className="table-data">Alien Soccer</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
    </div>
    <div className="table-row">
      <div className="table-data">3</div>
      <div className="table-data">Arctic Wolves SC</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
    </div>
    <div className="table-row">
      <div className="table-data">4</div>
      <div className="table-data">Golden Waves</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
    </div>
    <div className="table-row">
      <div className="table-data">5</div>
      <div className="table-data">Mystic Unicorns FC</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
    </div>
    <div className="table-row">
      <div className="table-data">6</div>
      <div className="table-data">Skyline Strikers FC</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
    </div>
    <div className="table-row">
      <div className="table-data">7</div>
      <div className="table-data">Thunderbolts FC</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
      <div className="table-data">2</div>
    </div>
          </div>	
        </div>
      </div>
    </div>
    </div>
  );
}

