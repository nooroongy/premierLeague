import Button from '../components/Button'
import Input from '../components/Input'
const SignIn = () => {
    return(
        <>
            <Input className="userId" placeholder="id" change={inputChange} maxlength={10}></Input>
            <input className="userPassword" placeholder="password" type="password" autoComplete="new-password"/>
            <Button className="btnLogOn" click={btnClick}>로그인하기</Button>
        </>
    );
}

const btnClick = (e) => {
    console.log("btnClick");
    console.log(e);
}

const inputChange = (e) => {
    // console.log("inputChange");
    // console.log(e.target.value);
}

export default SignIn