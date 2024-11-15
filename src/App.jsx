import React,{useState} from 'react'
import Navbar from './component/Navbar/navbar.jsx'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Card from './pages/Card/Card.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './component/Footer/Footer.jsx'
import LoginPopup from './component/LoginPopup/LoginPopup.jsx'
import FoodDisplay from './component/FoodDisplay/FoodDisplay.jsx'
import FoodItem from './component/FoodItem/FoodItem.jsx'
const App = () => {

  const [currentState, setCurrentState] = useState(false);
  return (
  <>
    {currentState ? <LoginPopup setCurrentState={setCurrentState} /> : null}
    <div className='app'>
      <Navbar setCurrentState={setCurrentState} currentState={currentState} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/foodDisplay" element={<FoodDisplay/> } />
        <Route path="/food" element={<FoodItem/> } />
      </Routes>
    </div>
    <Footer />
  </>
  )
}

export default App
