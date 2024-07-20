import React from 'react';

function Newsletter() {
  return (
    <section className="newsletter section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            {/* Start Newsletter Form */}
            <div className="subscribe-text">
              <h6>Sign up for newsletter</h6>
              <p>Subscribe to our newsletter to get all our news in your inbox.</p>
            </div>
            {/* End Newsletter Form */}
          </div>
          <div className="col-lg-6 col-12">
            {/* Start Newsletter Form */}
            <div className="subscribe-form">
              <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                <input
                  name="EMAIL"
                  placeholder="Your email address"
                  className="common-input"
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = 'Your email address')}
                  required
                  type="email"
                />
                <button className="btn">Subscribe</button>
              </form>
            </div>
            {/* End Newsletter Form */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
