import React from 'react'
import '../Home.css'
import FaceAnimation from './FaceAnimation'
const Section_1 = () => {
  return (
    <div  className='main-section_1 pt-5' >
     
     <div className='section_1-content' >
        <h1>Aim of the Project</h1>
        <FaceAnimation />
        <div className='content-text project-aim-content '  >
            <p style={{ color:'black', marginBottom:'100px' }} >The basic aim of this project is to detect the images of various species of birds. User can upload the images
               of the bird and we will predict the name of the bird in the image on the basis of CNN algorithm used in ML.
               We have tried to cover the maximum birds using the dataset imported from kaggle. <br/>
               Along with this we also want to create awareness towards Bird Conservation.
           </p>
           
        </div>
     </div>

    </div>
  )
}

export default Section_1