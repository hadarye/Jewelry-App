import { react } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home-page'>
            <h3 className='main-header'>create your own</h3>
            <div className='cards-grid'>
                <div className='card'>
                    <div className='image bracelet'></div>
                    <span>צמידים</span>
                </div>
                <div className='card' onClick={() => navigate('/createyourown')}>
                    <div className='image necklace'></div>
                    <span>שרשראות</span>
                </div>
                <div className='card'>
                    <div className='image necklace'></div>
                    <span>עגילים</span>
                </div>
            </div>
        </div>
    )
}

export default Home;