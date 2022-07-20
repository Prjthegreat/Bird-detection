import React from 'react'
import bird from '../../images/bird_image_3.jpg'
import '../Home.css'
const Section_2 = () => {
  return (
    <div  className='main-section_2 mt-5' >
        
        <div className='section_2-content'>
         <h1>Why do we need to take care of our birds?</h1>
           <div className='row' style={{ maxWidth:'98.5vw',color:''}} >
              <div className='col-md-8 content-text'  style={{paddingLeft:'55px'}} >
                <p>
                birds are also an intricate component of
                ecosystems, which we need for our own survival.
                Ecosystems such as forests and the marine
                environment provide us with food, medicines and
                important raw materials. They keep the climate stable, oxygenate air and transform
                pollutants into nutrients. Birds play an important role in the effective functioning of these
                systems. 
                </p> 
                <p>
                    As birds are high up in the food chain, they are also good indicators of the general state
                    of our biodiversity. When they start disappearing, it means that something is wrong with
                    our environment and that we need to take action. 
                </p>
              </div>
              <div className='col-md-4'>
                <img src={bird} alt="bird" height="400px" width="200px" />
              </div>
           </div>

        </div>

    </div>
  )
}

export default Section_2