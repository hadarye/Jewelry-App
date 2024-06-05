import { react } from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div className='home-page'>
            <h3 className='main-header'>create your own</h3>
            <div className='cards-grid'>
                <div className='card'>
                    <div className='image bracelet'></div>
                    <span>צמידים</span>
                </div>
                <div className='card'>
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