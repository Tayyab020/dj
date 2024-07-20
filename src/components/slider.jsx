import React from 'react';
import slider2img from '../img/slider2.jpg';

function Slider() {
  return (
    <section className="slider">
      <div className="hero-slider">
        {/* Start Single Slider */}
        <div
          className="single-slider"
          style={{ backgroundImage: `url(${slider2img})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="text">
                  <h1>
                    We Provide <span>Music</span> Services That You Can <span>Trust!</span>
                  </h1>
                  <p>
                    The creativity and musical talent of mixtun.com is unmistakable, and nothing can stop
                    them from achieving the success they work so hard for. Highly influential and
                    critically acclaimed, they are always striving to push the sonic boundaries, and
                    looking to leave their mark on the modern generation of music.
                  </p>
                  <div className="button">
                    <a href="/login.html" className="btn">Login / SignUp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Slider */}
      </div>
    </section>
  );
}

export default Slider;
