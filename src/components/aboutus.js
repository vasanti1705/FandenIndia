import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBRipple } from "mdb-react-ui-kit";
import "./aboutus.css";

import x from "./assests/WhatsApp Image 2022-10-06 at 11.55.29 AM (1).jpeg";
import y from "./assests/WhatsApp Image 2022-10-31 at 9.02.31 AM.jpeg";
import z from "./assests/WhatsApp Image 2023-03-05 at 10.33.37 PM - Copy.jpeg";
import a from "./assests/WhatsApp Image 2022-10-06 at 11.55.29 AM.jpeg";
import b from "./assests/WhatsApp Image 2022-09-26 at 3.32.43 PM (1).jpeg";
import c from "./assests/WhatsApp Image 2022-09-26 at 3.32.43 PM (2).jpeg";
import d from "./assests/c76fde2e-cb21-4128-8b75-f1776e39486a.JPG";
import e from "./assests/WhatsApp Image 2022-10-31 at 8.59.53 AM.jpeg";

const galleryImages = [
  { src: x, width: 300, height: 300 },
  { src: y, width: 400, height: 300 },
  { src: z, width: 300, height: 300 },
  { src: a, width: 400, height: 300 },
  { src: b, width: 400, height: 300 },
  { src: c, width: 300, height: 300 },
  { src: e, width: 800, height: 300 },
  { src: d, width: 300, height: 300 },
];

export default function App() {
  return (
    <div>
      <header style={{ marginTop: "140px", marginBottom: "100px", color: "white" }}>
        <div className="join-revolution">
          <h3>Join the Revolution</h3>
        </div>
      </header>

      <section
        style={{
          textAlign: "justify",
          maxWidth: "800px",
          margin: "0 auto",
          fontWeight: "bold",
          marginBottom: "100px",
        }}
      >
        <h3
          style={{
            fontFamily: "Bebas Neue",
            marginBottom: "10px",
            fontSize: "36px",
            color: "white",
          }}
        >
          Embracing passion, friendship and entertainment through spectator
          sports{" "}
        </h3>
        <h6
          style={{
            fontFamily: "Merriweather",
            marginBottom: "20px",
            fontSize: "24px",
            color: "white",
          }}
        >
          The vast discrepancy between the passion of Indian sports fans and
          accessibility to experience sports optimally laid the foundation of
          Fan Den. Providing a platform for upcoming youth talent to reach a
          larger audience, accompanied by helping fans in having the ultimate
          match day experience in line with their passion for sports is the
          objective of Fan Den.
        </h6>
      </section>

      <div className="container " style={{marginTop:'-12rem'}}>
        <div className="row">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-md-4 mb-4">
              <MDBRipple
                rippleTag="div"
                className="bg-image hover-overlay hover-zoom hover-shadow"
              >
                <img
                  src={image.src}
                  alt={`Image ${index}`}
                  style={{ width: image.width, height: image.height }}
                />
              </MDBRipple>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row" style={{ marginTop: "100px", marginBottom: "100px" }}>
          <div className="col-md-4">
            <h3 style={{ fontFamily: "Bebas Neue", color: "white" }}>
              OUR STORY :
            </h3>
          </div>
          <div className="col-md-8">
            <section
              style={{
                textAlign: "justify",
                fontWeight: "bold",
              }}
            >
              <h6
                style={{
                  fontFamily: "Merriweather",
                  marginBottom: "20px",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                FanDen originated out of passion and friendship. Life-long
                friends that developed their passion for sports together joint
                hands together to bring the sport community together and create
                a sense of togetherness to aid Indian sport to grow to its true
                potential.
              </h6>
            </section>
          </div>
        </div>
      </div>

      {/* ...Rest of the content... */}
    </div>
  );
}
