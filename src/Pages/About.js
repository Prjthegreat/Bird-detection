import React from 'react'
import ProfileCard from '../components/ProfileCard'
import "./About.css"
import prajwal_photo from '../images/Prajwal.jpg'
import vipul_photo from '../images/vipul_image.jpeg'
const About = () => {
    const members_description=[
        {
         name:'Vipul',role:'Web Developer',
         photo:vipul_photo,
         profileBio:'Specialties are Creative UI, HTML5, CSS3, Semantic Web, Responsive Layouts, Web Standards Compliance, Performance Optimization, Cross Device Troubleshooting.',
         insta:'demmylink',
         fb:'dummylink'
        },
        {
            name:'Prajwal Batra',role:'Web Developer',
            photo:prajwal_photo,
            profileBio:'Specialties are Creative UI, HTML5, CSS3, Semantic Web, Responsive Layouts, Web Standards Compliance, Performance Optimization, Cross Device Troubleshooting.',
            insta:'demmylink',
            fb:'dummylink'
        }
    ]
  return (
    <div>
   
      <div className='profile-card-flex' >

         { members_description.map(  member => (
            <ProfileCard  name={member.name} photo={member.photo} profileBio={member.profileBio} role={member.role}   />
         )  ) }

        
      </div> 

    </div>
  )
}

export default About