// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Main = () => {

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section className="section text-center">
                <MDBCarousel showControls>
                  <MDBCarouselItem
                    className="w-100 img-fluid d-block failure"
                    itemId={1}
                    src="/images/welcome.jpg"
                    alt="heroImg1"
                  />
                  <MDBCarouselItem
                    className="w-100 img-fluid d-block failure"
                    itemId={2}
                    src="/images/notDG.jpg"
                    alt="heroImg2"
                  />
                  <MDBCarouselItem
                    className="w-100 img-fluid d-block failure"
                    itemId={3}
                    src="/images/prices.jpg"
                    alt="heroImg3"
                  />
                </MDBCarousel>
              </section>
            </div>
          </div>
          <div className="row">
              <h2 className = 'popText text-center'>What people are saying about us:</h2>
              <MDBCarousel showControls>
                  <MDBCarouselItem
                    className="w-100 img-fluid d-block failure"
                    itemId={1}
                    src="/images/tweet1.png"
                    alt="..."
                  />
                  <MDBCarouselItem
                    className="w-100 img-fluid d-block failure"
                    itemId={2}
                    src="/images/tweet2.png"
                    alt="..."
                  />
                  <MDBCarouselItem
                    className="w-100 img-fluid d-block failure"
                    itemId={3}
                    src="/images/tweet3.png"
                    alt="..."
                  />
                </MDBCarousel>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='popText text-center'>
                <h2>This Month's Popular Item!</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
                <Link className='surpriseText' to='/product/22'>
             <div className = "surprise text-center">
                surprise me
             </div>
                </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;