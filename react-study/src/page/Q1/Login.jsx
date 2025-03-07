import styled from "styled-components";

import { LoginProvider, useLogin } from "../../hooks/LoginContext";

import { LoginInput } from "../../components/Login/LoginInput";
import { AutoLogin } from "../../components/Login/AutoLogin";
import { LoginBtn } from "../../components/Login/LoginBtn";
import { LoginModal } from "../../components/Login/LoginModal";

const Login = () => {

    return (
        <LoginProvider>
            <Wrapper>
                <Container>
                    <Title>로그인</Title>
                    <LoginInput />
                    <AutoLogin />
                    <LoginBtn />
                </Container>
                <ModalWrapper />
            </Wrapper>
        </LoginProvider>
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

const ModalWrapper = () => {
    const { isModalOpen } = useLogin();
    return isModalOpen ? <LoginModal /> : null;
};

export default Login;