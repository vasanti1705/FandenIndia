import React, { useEffect, useState } from 'react';
import './Review.css';
import { items } from './data';
import { ReactComponent as ArrowLeft } from './assests/chevron-left-solid.svg';
import { ReactComponent as ArrowRight } from './assests/chevron-right-solid.svg';
import { ReactComponent as Circle } from './assests/circle-solid.svg';
const inactiveColour = 'hsla(221, 0%, 88%, 0.81)';
const activeColour = 'hsla(221, 0%, 49%, 0.98)';

const Review = () => {
  const [leftCard, setLeftCard] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rightCard, setRightCard] = useState(0);
  const [arrayLength, setArrayLength] = useState(0);

  useEffect(() => {
    const length = getLength();
    for (let i = 0; i < length; i++) {
      if (items[i].status === 'active') {
        setLeftCard(i - 1);
        setActiveIndex(i);
        setRightCard(i + 1);
        setArrayLength(length);
      }
    }
  }, []);


  const getLength = () => {
    let length = 0;
    for (let i in items) {
      length++;
    }
    return length;
  };

  const activatePreviousSlide = () => {
    let leftIndex = 0;
    if (leftCard - 1 === -1) {
      leftIndex = arrayLength - 1;
    } else {
      leftIndex = leftCard - 1;
    }
    setRightCard(activeIndex);
    setActiveIndex(leftCard);
    setLeftCard(leftIndex);
  };

  const activateNextSlide = () => {
    let rightIndex = 0;
    if (rightCard + 1 === arrayLength) {
      rightIndex = 0;
    } else {
      rightIndex = rightCard + 1;
    }
    setLeftCard(activeIndex);
    setActiveIndex(rightCard);
    setRightCard(rightIndex);
  };

  const trackerArray = [];
  for (let i = 0; i <arrayLength; i++) {
    if (i === activeIndex) {
      trackerArray.push(
        <div className="circle">
          <Circle fill={activeColour} />
        </div>
      );
    } else {
      trackerArray.push(
        <div className="circle">
          <Circle fill={inactiveColour} />
        </div>
      );
    }
  }

  return (
    <div className="carousel-container">
          <div className="cards">
        <div className="card leftCard">
          <img className="avatars" src={items[leftCard].imgSrc} alt="avatar" />
          <div className="text">
            <h3 className="name">{items[leftCard].name}</h3>
            <i className="position">{items[leftCard].position}</i>
            <p className="testimony">{items[leftCard].quote}</p>
          </div>
          </div>

          <div className="card active">
        <img className="avatars" src={items[activeIndex].imgSrc} alt="avatar" />
        <span>
          <div className="text">
            <h3 className="name">{items[activeIndex].name}</h3>
            <i className="position">{items[activeIndex].position}</i>
            <p className="testimony">{items[activeIndex].quote}</p>
          
          <div className="arrow-container">
            <ArrowLeft className="arrow arrow-left" fill="hsla(221, 0%, 49%, 0.98)" onClick={activatePreviousSlide}></ArrowLeft>
            <ArrowRight className="arrow arrow-right" fill="hsla(221, 0%, 49%, 0.98)" onClick={activateNextSlide}></ArrowRight>
          </div>
          </div>
        </span>
      </div>

      <div className="card rightCard">
        <img className="avatars" src={items[rightCard].imgSrc} alt="avatar" />
        <div className="text">
          <h3 className="name">{items[rightCard].name}</h3>
          <i className="position">{items[rightCard].position}</i>
          <p className="testimony">{items[rightCard].quote}</p>
        </div>
      </div>
    </div>
    <div className="tracker">
      {trackerArray}
    </div>
    <a href="#" target="_blank"><button className="viewAll">View All</button></a>
    </div>
);

}
export default Review;
