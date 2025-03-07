import styled from "styled-components";

export const LoginBtn = () => {
    return (
        <Wrapper>
            <LoginButton>로그인하기</LoginButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginButton = styled.button`
    width: 22rem;
    height: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    background-color: #f15159;
    color: white;
    border: 2px solid #cd313e;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 16px;
    &:hover {
        background-color: #db4064;
        border: 2px solid #cd3155;
    }
`

