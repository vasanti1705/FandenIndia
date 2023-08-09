import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBRipple } from 'mdb-react-ui-kit';
import './aboutus.css';

import x from '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2022-10-06 at 11.55.29 AM (1).jpeg';
import y from'/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2022-10-31 at 9.02.31 AM.jpeg';
import z from  '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2023-03-05 at 10.33.37 PM - Copy.jpeg';
import a from  '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2022-10-06 at 11.55.29 AM.jpeg';
import b from  '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2022-09-26 at 3.32.43 PM (1).jpeg';
import c from  '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2022-09-26 at 3.32.43 PM (2).jpeg';
import d from  '/workspaces/FanDen-Website/src/components/assests/c76fde2e-cb21-4128-8b75-f1776e39486a.JPG';
import e from '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2022-10-31 at 8.59.53 AM.jpeg';





export default function App() {
    return (

      <div> 
        <header style={{ marginTop: '140px',marginBottom:"100px" }}>
      <div className="join-revolution">
        <h3>Join the Revolution</h3>
      </div>
      </header>

        
      <section style={{ textAlign: 'justify', maxWidth: '800px', margin: '0 auto',fontWeight: 'bold',marginBottom:'100px'}}>
        <h3 style={{ fontFamily: 'Bebas Neue' , marginBottom: '10px', fontSize: '36px' }}>Embracing passion, friendship and entertainment through spectator sports </h3>
        <h6 style={{ fontFamily: 'Merriweather' , marginBottom: '20px' , fontSize: '24px' }}>The vast discrepancy between the passion of Indian sports fans and accessibility
          to experience sports optimally laid the foundation of Fan Den.Providing a platform
          for upcoming youth talent to reach a larger audience, accompanied by helping fans
          in having the ultimate match day experience in line with their passion for sports
          is the objective of Fan Den.</h6>
      </section>
      
      <div style={{ display: 'flex', flexWrap: 'wrap',maxWidth: '1000px', margin: '0 auto' }}>
      <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
        <img src={x} alt="Logo" style={{ width: '300px', height: '300px'  }} />
        </MDBRipple>

        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>

        <img src={y} alt="Logo" style={{ width: '400px', height: '300px'  }} />
        </MDBRipple>

        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
        <img src={z} alt="Logo" style={{ width: '300px', height: '300px'  }} />
        </MDBRipple>

        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
        <img src={a} alt="Logo" style={{ width: '400px', height: '300px'  }} />
        </MDBRipple>
        
        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
        <img src={b} alt="Logo" style={{ width: '400px', height: '300px'  }} />
        </MDBRipple>

        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
        <img src={c} alt="Logo" style={{ width: '200px', height: '300px'  }} />
        </MDBRipple>

        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
        <img src={e} alt="Logo" style={{ width: '800px', height: '600px'  }} />
        </MDBRipple>

        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
        <img src={d} alt="Logo" style={{ width: '200px', height: '600px'  }} />
        </MDBRipple>
        
      </div>
      <div style={{ display: 'flex',marginTop:"100px",marginBottom:"100px" }}>
        <div style={{ flex: '0 0 auto',marginLeft:'250px' }}>
          <h3 style={{ fontFamily: 'Bebas Neue' }} >OUR STORY :</h3>
        </div>
        <section style={{ textAlign: 'justify', maxWidth: '600px', margin: '0 auto', fontWeight: 'bold' }}>
          <h6 style={{ fontFamily: 'Merriweather', marginBottom: '20px', fontSize: '24px' }}>
            FanDen originated out of passion and friendship.
            Life-long friends that developed their passion for sports together joint hands together to bring the sport community together and create
            a sense of togetherness to aide Indian sport to grow to its true potential.
          </h6>
        </section>
      </div>
      

    </div>
      
      
    );
};

