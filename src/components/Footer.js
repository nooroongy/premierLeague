import { Link } from 'react-router-dom';
import '../css/footer.css'

function Footer() {
    return <div className='footer-wrap'>
        <Link to='/table'>
            <button className='footer-btn'>table</button>
        </Link>
        <Link to=''>
            <button className='footer-btn'>home</button>
        </Link>
        <Link to='/match'>
            <button className='footer-btn'>match</button>
        </Link>
    </div>
}

export default Footer;