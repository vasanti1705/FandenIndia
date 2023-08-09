import React, { useState, useEffect } from 'react';
import './news.css';
import data from './DataSlider';
import { useNavigate } from 'react-router-dom';


const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data[0].images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide1((prevSlide) => (prevSlide + 1) % data[1].images.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentSlide1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide2((prevSlide) => (prevSlide + 1) % data[2].images.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide2]);

  const { title, text, images } = data[0];
  const { title: title1, text: text1, images: images1 } = data[1];
  const { title: title2, text: text2, images: images2 } = data[2];

  const navigate = useNavigate();

  const redirectToSportSection = () => {
    navigate('/sports'); // Replace '/sport' with the actual route path for your sport section
  };

  return (
    <div className='containerNews'> 
    <div className="trend">
      <h1>Trending News...</h1>
    </div> 
    <div className="news">
      <div className="card">
        <img src={images[currentSlide]} className="card-img-top" alt={title[currentSlide]} />
        <div className="card-body">
          <h5 className="card-title">{title[currentSlide]}</h5>
          <p className="card-text">{text[currentSlide]}</p>
          <a href="#" className="btn btn-primary">
            Football
          </a>
        </div>
      </div>

      <div className="card">
        <img src={images1[currentSlide1]} className="card-img-top" alt={title1[currentSlide1]} />
        <div className="card-body">
          <h5 className="card-title">{title1[currentSlide1]}</h5>
          <p className="card-text">{text1[currentSlide1]}</p>
          <a href="#" className="btn btn-primary">
            Cricket
          </a>
        </div>
      </div>

      <div className="card">
        <img src={images2[currentSlide2]} className="card-img-top" alt={title2[currentSlide2]} />
        <div className="card-body">
          <h5 className="card-title">{title2[currentSlide2]}</h5>
          <p className="card-text">{text2[currentSlide2]}</p>
          <a href="#" className="btn btn-primary">
            Formula
          </a>
        </div>
      </div>
     
    </div>
    <button className="btnn" onClick={redirectToSportSection}>
    <h5> 
        Read More Exciting News
        </h5>
      </button>

      </div>
  );
};

export default News;
