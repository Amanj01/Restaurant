
import { useContext } from 'react';

import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
  
  // const [itemCount, setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item' id='food-item food-item1'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt={name} />
          {!cartItems[id]
          ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} /> 
          : <div className='item-counter'>
            <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} />
              <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} onClick={()=>addToCart(id)} />

            </div>}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-description'>{description}</p>
        <p className='food-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
