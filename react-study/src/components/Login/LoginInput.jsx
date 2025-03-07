import styled from "styled-components";

export const LoginInput = () => {
    return (
        <>
            <CustomInput placeholder="이메일"></CustomInput>
            <CustomInput placeholder="비밀번호"></CustomInput>
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
`