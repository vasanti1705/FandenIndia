import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './footer.css';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='' style={{ marginBottom: '51px' }}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Fanden India
              </h6>
              <p>
                Experience sport like never before
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Tickets</h6>
              <div className="sport">
                <p>
                  <a href='#' className='x-class' style={{ textDecoration: 'none' }}>
                    Cricket
                  </a>
                </p>
                <p>
                  <a href='#' className='x-class' style={{ textDecoration: 'none' }}>
                    Football
                  </a>
                </p>
                <p>
                  <a href='#' className='x-class' style={{ textDecoration: 'none' }}>
                    Hockey
                  </a>
                </p>
                <p>
                  <a href='#' className='x-class' style={{ textDecoration: 'none' }}>
                    Volleyball
                  </a>
                </p>
              </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <div className="sport">
                <p>
                  <a href='#' className='x-class' style={{ textDecoration: 'none' }}>
                    Ticket
                  </a>
                </p>
                <p>
                  <a href='#' className='x-class' style={{ textDecoration: 'none' }}>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#' className='x-class' style={{ textDecoration: 'none' }}>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#' className='x-class' style={{ textDecoration: 'none' }}>
                    Help
                  </a>
                </p>
              </div>
            </MDBCol>

            <MDBCol md="6" lg="4" xl="4" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p className="address">
                <MDBIcon icon="home" className="me-2" />
                Mumbai, 111111, INDIA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                fandenindia@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='x-class fw-bold' href='https://mdbootstrap.com/'>
          FandenIndia
        </a>
      </div>
    </MDBFooter>
  );
}
