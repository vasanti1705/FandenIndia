import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './VerticalMode.css'; // Import your CSS file for animations

export default class VerticalMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: '/videos/VID-20230804-WA0000.mp4', // Use the relative URL to access the video
      playing: true, // Set playing to true to start the video automatically
      muted: true,
    };
  }

  handleVideoEnded = () => {
    // Restart the video after completion
    this.setState({ playing: true });
  };

  toggleMute = () => {
    this.setState((prevState) => ({
      muted: !prevState.muted, // Toggle the muted state
    }));
  };

  render() {
    const { videoURL, playing, muted } = this.state;

    const textStyle = {
      paddingTop: '1%',
      margin: '20px 20px',
      bottom: '0',
      fontFamily: 'Algerian',
      left: '0',
      right: '0',
      backgroundColor: 'black',
      color: 'white',
      padding: '10px',
    };

    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 2000,

      beforeChange: function (currentSlide, nextSlide) {
        console.log('before change', currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log('after change', currentSlide);
      },
    };

    return (
      <div>
        <div {...settings} className="slick-track" style={{ height: '650px', marginTop: '20px' }}>
          <div key={0}>
            <Link to="/events">
              <ReactPlayer
                url={videoURL}
                playing={playing}
                
                muted={muted} // Use the muted state
                width="100%"
                height="550px"
                style={{ marginTop: '20px' }} // Add margin at the top
                onEnded={this.handleVideoEnded} // Call handleVideoEnded when the video ends
              />
            </Link>
            <div className="slider-text" style={textStyle}>
              FandenIndia
            </div>
          </div>
        </div>
        <button
          onClick={this.toggleMute}
          style={{
            marginTop: '10px',
            padding: '5px 10px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {muted ? 'Unmute' : 'Mute'}
        </button>
       
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '-550px 20px' , marginBottom:'200px'}}>
        
          <img
            src="/videos/fanden.jpg"
            alt="Image 1"
            style={{ marginTop: '1px', width: '30%', height: '400px' }}
            className="fade-in hide-on-mobile"
          />
          <img
            src="/videos/IMG_3741.jpg"
            alt="Image 2"
            style={{ width: '30%', height: '400px' }}
            className="fade-on hide-on-mobile"
          />
           </div>
        </div>
      
    );
  }
}
