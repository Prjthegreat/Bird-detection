import React from 'react'
import "./ProfileCard.css"
import insta from '../images/instagram.png'
import fb from '../images/facebook.png'
const ProfileCard = ({name,photo,profileBio,role}) => {
  return (
      
<aside class="profile-card">
  
  <header>
    <a href="http://ali.shahab.pk">
      <img className='card-img-class'  src={`${photo}`}  />
    </a>
   
    <h1>{name}</h1>
    
    <h2>{role}</h2>
    
  </header>
  
 
  <div class="profile-bio">
    
    <p style={{  textAlign:'justify' }} >{profileBio}</p>
    
  </div>
  
  
  <ul class="profile-social-links" style={{ paddingLeft:'0px' }} >
    
   
    <li>
      <a href="https://twitter.com/alishahab">
        <img className='card-img-class' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
      </a>
    </li>
    
   
    <li>
      <a href="http://themeforest.net/user/alishahab">
        <img className='card-img-class' src={`${insta}`} />
      </a>
    </li>
    
 
    <li>
      <a href="https://codepen.io/alishahab">
        <img className='card-img-class' src={`${fb}`}  />
      </a>
    </li>
    
  </ul>
  
</aside>
    
  )
}

export default ProfileCard