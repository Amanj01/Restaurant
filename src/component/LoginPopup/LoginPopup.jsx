
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setCurrentState}) => {
  return (
    <div className='popup'>
      <div className="form-box">
         <img className='btn1' src={assets.cross_icon} onClick={()=>setCurrentState(false)} alt="" />
<form className="form">
    <span className="title">Sign up</span>
    <span className="subtitle">Create a free account with your email.</span>
    <div className="form-container">
      <input type="text" className="input" placeholder="Full Name" />
			<input type="email" className="input" placeholder="Email" />
			<input type="password" className="input" placeholder="Password" />
    </div>
    <button>Sign up</button>
</form>
<div className="form-section">
  <p>Have an account? <a href="">Log in</a> </p>
</div>
</div>
    </div>
  )
}

export default LoginPopup
