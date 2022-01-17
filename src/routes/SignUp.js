import { Link } from 'react-router-dom'

const SignUp = () => {
    return(
        <>
            <Link to='personal'>
                <button className='btnPer'>개인 회원가입</button>
            </Link>
            <Link to='enterprise'>
                <button className='btnEnt'>기업 회원가입</button>
            </Link>
        </>
    );
}

export default SignUp