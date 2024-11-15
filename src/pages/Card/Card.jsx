import React, { useContext } from 'react';
import './Card.css';
import { StoreContext } from '../../component/Context/StoreContext';
import PlaceOrder from '../PlaceOrder/PlaceOrder.jsx';
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          <p>Add</p>
        </div>
        <br />
        <hr />
            {food_list.map((item, index) => {

if (cartItems[item._id] > 0) {

      return (

        <div>
          <div className='cart-items-title cart-items-item'>

<img src={item.image} alt="" />

<p>{item.name}</p>

<p>${item.price}</p>

<p className='quantity'> {cartItems[item._id]}</p>

<p >${item.price * cartItems[item._id]}</p>

<p className='remove' onClick={()=>removeFromCart(item._id)}>x</p>

<p onClick={()=>addToCart(item._id)}>Add</p>

</div>
<hr  />
        </div>
        


      )
}

})}
  
      </div>
      <div className="btn-place">
     <Link to="/order"> <button class="button">
  <span class="button-content">Order now </span>
</button> </Link>

      </div>
    </div>
  )
};

export default Cart;

