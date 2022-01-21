import Button from '../components/Button'
import Input from '../components/Input'
import { useState, useEffect } from "react";

const SignIn = () => {
    const [emailValue, setEmail] = useState("");
    const [passwordValue, setPassword] = useState("");

    const emailKeyUp = (e) => {
        setEmail(e.target.value);
    }
    const passwordKeyUp = (e) => {
        setPassword(e.target.value);
    }
    const btnClick = (e) => {
        console.log(emailValue);
        console.log(passwordValue);
    }
    
    const inputChange = (e) => {
        // console.log("inputChange");
        // console.log(e.target.value);
    }
    return(
        <>
            <Input keyup={emailKeyUp} className="userId" placeholder="id" change={inputChange} maxlength={20}></Input>
            <Input keyup={passwordKeyUp} className="userPassword" type="password" placeholder="password" maxlength={8}></Input>
            <Button className="btnLogOn" click={btnClick}>로그인하기</Button>
        </>
    );
}

export default SignIn