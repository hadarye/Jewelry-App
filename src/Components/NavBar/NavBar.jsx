import { react } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className='nav-bar'>
            <h1 className='logo-header' onClick={() => navigate("home")}>Mona</h1>
        </div>
    )
}

export default NavBar;