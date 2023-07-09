import React from 'react'
import './subHeading.css'
import { images } from '../../constants/index'
const SubHeading = ({title}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p-cormorant'>{title}</p>
      <img src={images.spoon} />
     
    </div>
  )
}

export default SubHeading