import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.css'
const Chef = () => {
  return (
    <div className='app-bg app-wrapper section-padding'>
      <div className='app-wrapper-img app-wrapper-img-reverse'>
        <img src={images.chef} alt="" />
      </div>
      <div className='app-wrapper-info'>
        <SubHeading title={"Chef's Word"} />
        <h1 className='headtext-cormorant'>What We Believe In</h1>
        <div className="app-chef-content">
          <div className="app-chef-content-quote">
            <img src={images.quote} />
            <p className="p-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p className="p-opensans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </p>
        </div>
        <div className='app-chef-sign'>
          <p>Kevin Luo</p>
          <p className='p-opensans'>Chef & Founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chef