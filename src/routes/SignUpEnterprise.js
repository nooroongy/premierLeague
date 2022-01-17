const SignUpEnterprise = () => {
    return(
        <>
            <h2>기업 </h2>
            <input className="userId" placeholder="id"/>
            <input className="userPassword" placeholder="password" type="password" autoComplete="new-password"/>
            <input className="userPasswordConfirm" placeholder="password confirm" type="password" autoComplete="new-password"/>
            <button className="btnSignUp">회원 가입</button>
        </>
    );
}

export default SignUpEnterprise