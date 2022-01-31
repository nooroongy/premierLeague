import Button from '../components/Button'
import Input from '../components/Input'
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../components/Firebase';

const SignIn = () => {
    const [emailValue, setEmail] = useState("");
    const [passwordValue, setPassword] = useState("");

    const emailKeyUp = (e) => {
        setEmail(e.target.value);
    }
    const passwordKeyUp = (e) => {
        setPassword(e.target.value);
    }    
    const inputChange = (e) => {
        // console.log("inputChange");
        // console.log(e.target.value);
    }
    const btnClick = (e) => {
        console.log(emailValue);
        console.log(passwordValue);

        // sign-in
        Logon();
    }
    const Logon = async () => {
        try {
            const user = await signInWithEmailAndPassword(
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
            <Input keyup={emailKeyUp} className="userId" placeholder="id" change={inputChange} maxlength={20}></Input>
            <Input keyup={passwordKeyUp} className="userPassword" type="password" placeholder="password" maxlength={8}></Input>
            <Button className="btnLogOn" click={btnClick}>로그인하기</Button>
        </>
    );
}

export default SignIn