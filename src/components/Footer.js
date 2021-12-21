import { Link } from 'react-router-dom';
import '../css/footer.css'

function Footer() {
    return <div className='footer-wrap'>
        <Link to='premierLeague/table'>
            <button className='footer-btn'>Tables</button>
        </Link>
        <Link to='premierLeague'>
            <button className='footer-btn'>Home</button>
        </Link>
        <Link to='premierLeague/result'>
            <button className='footer-btn'>Results</button>
        </Link>
    </div>
}

export default Footer;