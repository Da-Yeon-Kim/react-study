import styled from "styled-components";
import { useState } from "react";

import { LoginInput } from "../../components/Login/LoginInput";
import { AutoLogin } from "../../components/Login/AutoLogin";
import { LoginBtn } from "../../components/Login/LoginBtn";
import { LoginModal } from "../../components/Login/LoginModal";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [autoLogin, setAutoLogin] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Wrapper>
            <Container>
                <Title>로그인</Title>
                <LoginInput email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                <AutoLogin autoLogin={autoLogin} setAutoLogin={setAutoLogin} />
                <LoginBtn setIsModalOpen={setIsModalOpen} />
            </Container>
            {isModalOpen && <LoginModal email={email} password={password} autoLogin={autoLogin} setIsModalOpen={setIsModalOpen} />}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100dvh;
    align-items: center;
    justify-content: center;
    background-color: #1e1e1e;
    color: white;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
`

export default Login;