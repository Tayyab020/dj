import React from 'react';

function ContactUs() {
  return (
    <section className="appointment" style={{ marginBottom: '100px' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Contact Us!</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12">
            <form className="form" action="#">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input name="name" type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input name="email" type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input name="phone" type="text" placeholder="Phone" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input type="text" placeholder="Date" id="datepicker" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <textarea name="message" placeholder="Write Your Message Here....."></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-4 col-12">
                  <div className="form-group">
                    <div className="button">
                      <button type="submit" className="btn">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
