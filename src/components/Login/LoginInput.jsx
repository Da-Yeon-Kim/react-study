import styled from "styled-components";
import { useLogin } from "../../hooks/LoginContext";

export const LoginInput = () => {
    const { setEmail, setPassword } = useLogin();

    return (
        <>
            <CustomInput type="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
            <CustomInput type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
        </>
    );
}

const CustomInput = styled.input`
    width: 20rem;
    height: 3rem;
    margin-bottom: 0.5rem;
    padding: 0rem 1rem 0rem 1rem;
    font-size: 16px;
    background-color: #1e1e1e;
    color: white;
    border: 1px solid #333333;
    border-radius: 5px;
    &:hover,
    &:focus {
        outline: none;
        border: 1px solid #646464;
    }
`