import React from 'react'
import { SubHeading, Menuitem } from '../../components'
import { images, data } from '../../constants'
import './Menu.css'
const Menu = () => {
  return (
    <div className='app-specialMenu flex-center  section-padding' id='menu'>
      <div className='app-specialMenu-title '>
        <SubHeading title="Menu That Fits Palatte " />
        <h1 className='headtext-cormorant'>Today's Special</h1>
      </div>
      <div className='app-specialMenu-menu'>
        <div className='app-specialMenu-menu-wine flex-center'>
          <p className='app-specialMenu-menu-heading'>Wine & Beer</p>
          <div className='app-specialMenu-menu-items'>
            {data.wines.map((wine, index) => (
              <Menuitem key={wine.title + index} title={wine.title} tags={wine.tags} price={wine.price} />
            ))}
          </div>
        </div>
        <div className='app-specialMenu-menu-img'>
          <img src={images.menu} alt="" />
        </div>
        <div className='app-specialMenu-menu-cocktails flex-center'>
          <p className='app-specialMenu-menu-heading'>cocktails</p>
          <div className='app-specialMenu-menu-items'>
            {data.cocktails.map((cocktail, index) => (
              <Menuitem key={cocktail.title + index} title={cocktail.title} tags={cocktail.tags} price={cocktail.price} />

            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <button type='button' className='custom-button'>View More </button>
      </div>
    </div>
  )
}

export default Menu