import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; // Ensure the path is correct
// import sectionImg from '../img/section-img.png'; // Ensure the path is correct
import aboutImg from '../img/about-img.jpg'; // Ensure the path is correct
import Header2 from '../components/header2';
import Footer from '../components/footer';
const About = () => {
  return (
    <>
<Header2/>
      {/* Start Why Choose */}
      <section className="why-choose section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Songs To Give You Joy!</h2>
                {/* <img src={sectionImg} alt="Section" /> */}
                <p>PLAY YOUR FAVORITE SONGS WHEREVER YOU GO</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              {/* Start Choose Left */}
              <div className="choose-left col-lg-6">
                <h3>Who We Are</h3>
                <p>
                  The creativity and musical talent of mixtun.com is unmistakable, and nothing can stop them
                  from achieving the success they work so hard for. Highly influential and critically
                  acclaimed, they are always striving to push the sonic boundaries, and looking to leave their
                  mark on the modern generation of music.
                </p>
              </div>
              <img src={aboutImg} width="50%" alt="About" />
              {/* End Choose Left */}
            </div>
          </div>
        </div>
      </section>
      {/* End Why Choose */}
       
      <Footer />
    </>
  );
};

export default About;
