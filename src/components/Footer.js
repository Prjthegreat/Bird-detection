import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    
    // <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
        <div class="col-xs-6 col-md-6">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><NavLink  to="/about">About</NavLink></li>
              <li><NavLink  to="/contact">Contact</NavLink></li>
              <li><NavLink  to="/">Home</NavLink></li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6">
            <h6>Contact Us</h6>
            <div class="contact_us_list" 
            // style={{ display:'flex', flexDirection:'column',alignItems:'flex-start' }}
             >
              <ul >
                <li>Mail: <strong>bird_detection@gamil.com</strong> </li>
                <li>Phone: <strong>8059903278</strong></li>
                <li>Address: <strong>JC Bose UST,Sector-6 Faridabad</strong>  </li>
              </ul>
            </div>
          </div>

          {/* <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div> */}

         
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 Made with Care by Vipul &amp; Prajwal 

            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa-brands fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>

  )
}

export default Footer