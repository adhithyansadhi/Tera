
import './Nav.css'
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <img src='./tera_logo_poppins.png' alt='logo' className='logos'/>
        <ul>
            <li onClick={() => navigate("/Home")}>Home</li>
            <li onClick={() => navigate("/")}>Datas</li>
            <li onClick={() => navigate("/contribute")}>Contibute</li>
            <li onClick={() => navigate("/About")}>About</li>
            
        </ul>
        <div className='search-container'>
            <input type='text' placeholder='search datas here' className='search-box'/>
            <img src='./search-icon-png-9985.png' alt='search' className='search-button'/>
            

        </div>
    </div>
  )
}

export default Nav;