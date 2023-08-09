import React, { Component } from "react";
import Slider from "react-slick";

import { Link } from 'react-router-dom';


import e1 from '../assests/IMG_0781.jpg';
import e2 from '../assests/WhatsApp Image 2022-10-07 at 3.21.48 PM.jpeg';
import e3 from '../assests/WhatsApp Image 2023-03-05 at 10.33.36 PM.jpeg';
import e4 from '../assests/WhatsApp Image 2022-09-26 at 3.32.43 PM (2).jpeg';

import e5 from '../assests/WhatsApp Image 2022-10-07 at 3.21.48 PM.jpeg';
import e6 from '../assests/WhatsApp Image 2022-09-26 at 3.32.43 PM (2).jpeg';
import e7 from '../assests/WhatsApp Image 2023-03-05 at 10.33.36 PM.jpeg';
import e8 from '../assests/WhatsApp Image 2023-02-27 at 12.39.21 AM.jpeg';





export default class PastEventPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
  

    const textStyle = {
        
        bottom: "0",
        fontFamily:"Algerian",
        left: "0",
        right: "0",
        backgroundColor: "black",
        textcolor:'white',
        color: "white",
        padding: "10px"
      };
  
    const settings = {
      className: "center",
      centerMode: true,
      dots:true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    
    

    return (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "Algerian" }}>PAST EVENTS</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
        <div key={0} >
        <Link to="/events">
        <img className="d-block w-100"
          src={e1}
          alt="First slide"
          style={{ height: "300px" }} 
          />
          </Link>
          <div className="slider-text" style={textStyle}>Manchester Derby in Malad0</div>
        </div>
        
          <div key={1} >
          <Link to="/events">
          <img className="d-block w-100"
          src={e2}
          alt="First slide"
          style={{ height: "300px" }} 
          />
          </Link>
          <div className="slider-text" style={textStyle}>Manchester Derby in Malad,World Cup in Andheri</div>
          </div>
          <div key={2} >
          <Link to="/events">
          <img className="d-block w-100"
          src={e3}
          alt="Second Slide"
          style={{ height: "300px" }} 
          />
          </Link>
          <div className="slider-text" style={textStyle}>Monza in Bandra2</div>
          </div>
          <div key={3} >
          <Link to="/events">
          <img className="d-block w-100"
          src={e4}
          alt="Second Slide"
          style={{ height: "300px" }}
          />
          </Link>
          <div className="slider-text" style={textStyle}>El Clasico in Bandra</div>
        </div>
          <div key={4} >
          <Link to="/events">
          <img className="d-block w-100"
          src={e5}
          alt="Second Slide"
          style={{ height: "300px" }}
          />
          </Link>
          <div className="slider-text" style={textStyle}>United vs Arsenal in Indiranagar</div>
          </div>
          <div key={5} >
          <Link to="/events">
          <img className="d-block w-100"
          src={e6}
          alt="Second Slide"
          style={{ height: "300px" }}
          />
          </Link>
          <div className="slider-text" style={textStyle}>United vs Liverpool in Malad</div>
          </div>
          <div key={6} >
          <Link to="/events">
          <img className="d-block w-100"
          src={e7}
          alt="Second Slide"
          style={{ height: "300px" }}
          />
          </Link>
          <div className="slider-text" style={textStyle}>Der Klassiker in Saki Naka</div>
          </div>
          <div key={7} >
          <Link to="/events">
          <img className="d-block w-100"
          src={e8}
          alt="Second Slide"
          style={{ height: "300px" }}
          />
          </Link>
          <div className="slider-text" style={textStyle}>Argentina vs Croatia- World Cup</div>
          </div>
        </Slider>
        
      </div>
    );
  }
}


