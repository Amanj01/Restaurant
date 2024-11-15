import React,{useState,useContext} from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import LoginPopup from '../LoginPopup/LoginPopup.jsx'
import { StoreContext } from '../../component/Context/StoreContext';
import Search from './../Search/Search';


const Navbar = ({setCurrentState}) => {
  const [menu, setMenu] = useState("home")
  const {totalItems} = useContext(StoreContext)
  return (
    <div className='navbar'>
     <Link to='/'> <img src={assets.logo} className='logo' alt="" /> </Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu=="home"? "active": ""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu=="menu"? "active": ""}>Menu</a>
        <a href="#footer" onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"? "active": ""}>app</a>
        <a href="#footer" onClick={()=>setMenu("contact")} className={menu=="contact"? "active": ""}>Contact</a>
      </ul>
      <div className='navbar-right'>
        <div>{<Search/>}</div>
        <div className='nav-search'>
        <Link to='/card'> <img src={assets.basket_icon} alt="" /> </Link> 
          <div className={totalItems()?'dot' : 'none'}></div>
        </div>
       <button onClick={()=>setCurrentState(true)} >Sign in</button>
       
      </div>
    </div>
  )
}

export default Navbar
