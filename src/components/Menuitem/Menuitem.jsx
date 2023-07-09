import React from 'react'
import './Menuitem.css';
const Menuitem = ({title ,price,tags}) => {
  return (
    <div className='app-menuItem'>
      <div className='app-menuItem-head'>
      <div className='app-menuItem-name'>
          <p className='p-cormorant' style={{ color: '#DCCA87' }} >{title }</p>
        </div>
        <div className='app-menuItem-dash'/>
        <div className='app-menuItem-price'>
          <p className='p-cormorant' >{price}</p>
        </div>
      </div>
      <div className='app-menuItem-sub'>
        <p className='p-opensans' style={{ color: "#AAA" }}>{tags }</p>
      </div>
    </div>
  )
}

export default Menuitem