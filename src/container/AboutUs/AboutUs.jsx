import React from 'react'
import './AboutUs.css'
import { images } from '../../constants'
const AboutUs = () => {
  return (
    <div className='app-aboutus app-bg flex-center section-padding ' id='#about'>
      <div className='app-aboutus-overly flex-center'>
        <img src={images.G} alt="" />
      </div>
      <div className='app-aboutus-content flex-center'>
        <div className='app-aboutus-content-about'>
          <h1 className='headtext-cormorant'>About Us</h1>
          <img src={images.spoon} alt="" />
          <p className='p-opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type="button" className='custom-button'>Know More</button>
        </div>
        <div className='app-aboutus-content-knife flex-center'>
          <img src={images.knife} alt="" />
        </div>
        <div className='app-aboutus-content-history'>
          <h1 className='headtext-cormorant'>Out History</h1>
          <img src={images.spoon} alt="" />
          <p className='p-opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type="button" className='custom-button'>Know More</button>
        </div>
        
      </div>
    </div>
  )
}

export default AboutUs