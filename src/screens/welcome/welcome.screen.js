import { useNavigate } from 'react-router-dom';
import './welcome.screen.css';


export default function WelcomeScreen() {

    const navigate = useNavigate();
    
    return (
        <div className='container'>
            <div className='welcome-header'>
                Welcome to movie portal
            </div>
            <div className='movie-list-link' onClick={()=>navigate('list')}>
                Click to see movie list
            </div>
        </div>
    )
}