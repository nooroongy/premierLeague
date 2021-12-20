import { Link } from 'react-router-dom';
import '../css/footer.css'

function Footer() {
    return <div className='footer-wrap'>
        <Link to='premierLeague/table'>
            <button className='footer-btn'>table</button>
        </Link>
        <Link to='premierLeague'>
            <button className='footer-btn'>home</button>
        </Link>
        <Link to='premierLeague/match'>
            <button className='footer-btn'>match</button>
        </Link>
    </div>
}

export default Footer;