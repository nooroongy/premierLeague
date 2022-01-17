const SignIn = () => {
    return(
        <>
            <input className="userId" placeholder="id"/>
            <input className="userPassword" placeholder="password" type="password" autoComplete="new-password"/>
            <button className="btnLogOn">로그인 하기</button>
        </>
    );
}

export default SignIn