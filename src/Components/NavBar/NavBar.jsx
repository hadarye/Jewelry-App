import { react } from 'react';
import { useNavigate } from 'react-router-dom';
import  menu from '../../Assets/Images/menu.png'
import './NavBar.scss';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className='nav-bar'>
            <img className='menu' src={menu}></img>
            <h1 className='logo-header' onClick={() => navigate("home")}>refined</h1>

        </div>
    )
}

export default NavBar;