import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='menu-text'>Choose from diverse menu featuring a delectable array of dishes 
       . our mission is to satisfy and elevate your
          dining experience, one delicious meal at a time.</p> 
          <div className='explore-menu-list'>

            {menu_list.map((item, index) => (
              <div onClick={() => setCategory(prev=>prev === item.menu_name ? "All" : item.menu_name)} 
              className='explore-menu-item' key={index}>
                <img className={category===item.menu_name? "active" : ""} key={index} src={item.menu_image} alt={item.menu_name} />
                <p>{item.menu_name}</p>
                {/* {console.log("Menu Name:", item.menu_name)} */}
              </div>
            ))}

          </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
