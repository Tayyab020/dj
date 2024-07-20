import React from 'react'



const footer = () => {
  return (
    
    <footer id="footer" class="footer">
    <div class="footer-top">
        <div class="container">
            <div class="row all-footer">
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-footer">
                        <h2>About Us</h2>
                        <p>The creativity and musical talent of mixtun.com is unmistakable, and nothing can stop
                            them from achieving the success they work so hard for.</p>
                
                        <ul class="social">
                            <li><a href="#"><i class="icofont-facebook"></i></a></li>
                            <li><a href="#"><i class="icofont-google-plus"></i></a></li>
                            <li><a href="#"><i class="icofont-twitter"></i></a></li>
                            <li><a href="#"><i class="icofont-vimeo"></i></a></li>
                            <li><a href="#"><i class="icofont-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-footer f-link">
                        <h2>Quick Links</h2>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <ul>
                                    <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a>
                                    </li>
                                    <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>About Us</a>
                                    </li>
                                    <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Services</a>
                                    </li>
                                    <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact
                                            Us</a></li>
                                    <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>DJS</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-footer">
                        <h2>Newsletter</h2>
                        <p>subscribe to our newsletter to get allour news in your inbox.. </p>
                        <form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
                            <input name="email" placeholder="Email Address" class="common-input"
                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'"
                                required="" type="email"/>
                            <button class="button"><i class="icofont icofont-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                    <div class="copyright-content">
                        <p>© Copyright 2024 | All Rights Reserved by <a href="https://www.wishtun.com"
                                target="_blank">wishtun.com</a> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default footer
