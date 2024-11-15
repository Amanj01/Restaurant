
import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div id='footer'>
  <section></section>
<footer class="footer-distributed">

      <div class="footer-left">

        <img src={assets.logo} alt="" />

        <p class="footer-links">
          <a href="#" class="link-1">Home</a>
                  
          <a href="#">Pricing</a>
        
          <a href="#">About</a>
          
          <a href="#">Delivery</a>
          
          <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">Tasty Food© sins 2015</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>Main road</span> Ankawa, Erbil</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>0750 4443223</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:TastyFood@gmail.com">TastyFood@gmail.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />

        </div>

      </div>

    </footer>
    </div>
  )
}

export default Footer
