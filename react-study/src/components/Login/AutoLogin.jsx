import styled from "styled-components";

export const AutoLogin = () => {
    return (
        <Wrapper>
            <CheckIcon src='../../img/icon_check.png'></CheckIcon>
            <CheckTitle>자동로그인</CheckTitle>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

const CheckIcon = styled.img`
    width: 1rem;
    margin-right: 0.3rem;
`

const CheckTitle = styled.p`
    margin: 0;
    font-size: 14px;
    cursor: pointer;
`