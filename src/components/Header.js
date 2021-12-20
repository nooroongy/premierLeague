import { connect } from 'react-redux'
import '../css/header.css'

const Header = ({ }) => {
    return (<div className='header-wrap '>
        <span className='header-nickname'>header</span>
    </div>)
}

function mapStateToProps(state, props) {
    return ({})
}

export default connect(mapStateToProps)(Header);