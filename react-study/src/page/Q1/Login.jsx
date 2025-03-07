import styled from "styled-components";

import { LoginInput } from "../../components/Login/LoginInput";
import { AutoLogin } from "../../components/Login/AutoLogin";
import { LoginBtn } from "../../components/Login/LoginBtn";

const Login = () => {
    return (
        <Wrapper>
            <Container>
                <Title>로그인</Title>
                <LoginInput />
                <AutoLogin />
                <LoginBtn />
            </Container>
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