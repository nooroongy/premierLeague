import Input from '../components/Input'
import Button from '../components/Button'
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../components/Firebase';

const SignUpPersonal = () => {
    const [emailValue, setEmail] = useState("");
    const [passwordValue, setPassword] = useState("");
    const [isDisabled, setDisabled] = useState(true);

    const emailBlur = (e) => {
        setEmail(e.target.value);
    }
    const passwordKeyUp = (e) => {
        // "회원 가입" 버튼 disabled true 처리
        setDisabled(true);

        setPassword(e.target.value);
    }
    const passwordConfirmBlur = (e) => {
        if(e.target.value !== passwordValue){
            alert("비밀번호 값이 다릅니다!");
            e.target.value = "";

            // "회원 가입" 버튼 disabled true 처리
            setDisabled(true);
            return;
        }else{
            // "회원 가입" 버튼 disabled false 처리
            setDisabled(false);
        }
    }
    const btnClick = (e) => {
        console.log(emailValue);
        console.log(passwordValue);

        // sign-up
        register();
    }

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                emailValue,
                passwordValue
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };
    return(
        <>
            <h2>개인 </h2>
            <Input blur={emailBlur} className="userId" type="email" placeholder="id"></Input>
            <Input keyup={passwordKeyUp} className="userPassword" type="password" placeholder="password" maxlength={8}></Input>
            <Input blur={passwordConfirmBlur} className="userPasswordConfirm" type="password" placeholder="password confirm" maxlength={8}></Input>
            <Button className="btnSignUp" disabled={isDisabled} click={btnClick}>회원 가입</Button>
        </>
    );
}

export default SignUpPersonal