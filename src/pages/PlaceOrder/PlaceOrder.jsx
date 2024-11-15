import React,{useContext} from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../component/Context/StoreContext.jsx'

const PlaceOrder = () => {
  const {totalPrice} = useContext(StoreContext);
  return (
    <div className='place-order-container'>
      <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
  <h2 className="text-black font-bold text-lg">Fill in the requirement</h2>

  <div className="mt-4">
    <label className="text-black" htmlFor="name">Name</label>
    <input placeholder="Your name" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
  </div>

  <div className="mt-4">
    <label className="text-black" htmlFor="address">Address</label>
    <textarea placeholder="Your address" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="address"></textarea>
  </div>

  <div className="mt-4 flex flex-row space-x-2">
    <div className="flex-1">
      <label className="text-black" htmlFor="city">City</label>
      <input placeholder="Your city" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="city" type="text" />
    </div>

    <div className="flex-1">
      <label className="text-black" htmlFor="state">State</label>
      <input placeholder="Your state" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="state" type="text" />
    </div>
  </div>

  <div className="mt-4 flex flex-row space-x-2">
    <div className="flex-1">
      <label className="text-black" htmlFor="zip">Phone number</label>
      <input placeholder="Your phone number" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="zip" type="number" />
    </div>

    <div className="flex-1">
      <label className="text-black" htmlFor="country">Country</label>
      <select className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="country">
        <option value="">Select a country</option>


        <optgroup label="Asia">
          <option value="AM">Iraq</option>
        </optgroup>


        ...
      </select>
    </div>
  </div>

  <div className="mt-4 flex justify-end">
    <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900" type="submit">Submit</button>
  </div>
</div>

      <br />
      <hr />
      <br />
      <h5>Total price: ${totalPrice()}</h5>
      <h5>Delivery fee: Free</h5>
    </div>
  )
}

export default PlaceOrder
