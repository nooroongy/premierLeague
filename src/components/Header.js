import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/header.css'

const Header = ({ }) => {
    return (<div className='header-wrap '>
        <span className='header-buttonset'>
            <Link to='premierLeague/table'>
                <button className='header-link'>Tables</button>
            </Link>
            <Link to='premierLeague/result'>
                <button className='header-link'>Results</button>
            </Link>
            <Link to='premierLeague/nft'>
                <button className='header-link'>NFT</button>
            </Link>
        </span>
        <Link to='premierLeague'>
            <button className='header-logo'>Not For Sale</button>
        </Link>
    </div>)
}

function mapStateToProps(state, props) {
    return ({})
}

export default connect(mapStateToProps)(Header);