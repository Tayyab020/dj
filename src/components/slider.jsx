import React from 'react';
import slider2 from '../img/slider2.jpg';
import slider from '../img/slider.jpg';

const Slider = () => {
  const slides = [
    {
      image: slider2,
      heading: 'We Provide Music Services That You Can Trust!',
      description: 'The creativity and musical talent of mixtun.com is unmistakable, and nothing can stop them from achieving the success they work so hard for. Highly influential and critically acclaimed, they are always striving to push the sonic boundaries, and looking to leave their mark on the modern generation of music.',
    },
    {
      image: slider,
      heading: 'We Provide Medical Services That You Can Trust!',
      description: 'The creativity and musical talent of mixtun.com is unmistakable, and nothing can stop them from achieving the success they work so hard for. Highly influential and critically acclaimed, they are always striving to push the sonic boundaries, and looking to leave their mark on the modern generation of music.',
    },
  ];

  return (
    <section className="slider">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            className="single-slider"
            style={{ backgroundImage: `url(${slide.image})` }}
            key={index}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      {slide.heading.split(' ').map((word, i) => (
                        <span key={i}>{word} </span>
                      ))}
                    </h1>
                    <p>{slide.description}</p>
                    <div className="button">
                      <a href="/login.html" className="btn">
                        Login / SignUp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
