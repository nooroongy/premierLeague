import Input from '../components/Input'
import Button from '../components/Button'
import { useState, useEffect } from "react";

const SignUpPersonal = () => {
    const [emailValue, setEmail] = useState("");
    const [passwordValue, setPassword] = useState("");

    const emailBlur = (e) => {
        setEmail(e.target.value);
    }
    const passwordKeyUp = (e) => {
        setPassword(e.target.value);
    }
    const passwordConfirmBlur = (e) => {
        if(e.target.value != passwordValue){
            alert("비밀번호 값이 다릅니다!");
            e.target.value = "";
            return;
        }
    }
    const btnClick = (e) => {
        console.log(emailValue);
        console.log(passwordValue);
    }
    return(
        <>
            <h2>개인 </h2>
            <Input blur={emailBlur} className="userId" type="email" placeholder="id"></Input>
            <Input keyup={passwordKeyUp} className="userPassword" type="password" placeholder="password" maxlength={8}></Input>
            <Input blur={passwordConfirmBlur} className="userPasswordConfirm" type="password" placeholder="password confirm" maxlength={8}></Input>
            <Button className="btnSignUp" click={btnClick}>회원 가입</Button>
        </>
    );
}

export default SignUpPersonal