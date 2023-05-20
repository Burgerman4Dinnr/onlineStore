// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Main = () => {

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section className="section text-center">
                  <img src='/images/welcome.png' className='img-fluid welcomeImg' alt='Euro Lieutenant Welcome image' />
              </section>
            </div>
          </div>
          <div className="row">
              <h2 className = 'popText text-center'>What people are saying about us:</h2>
              <img src='/images/tweet1.png' className='img-fluid tweet' alt='tweet'></img>
              <img src='/images/tweet2.png' className='img-fluid tweet' alt='tweet'></img>
              <img src='/images/tweet3.png' className='img-fluid tweet' alt='tweet'></img>
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