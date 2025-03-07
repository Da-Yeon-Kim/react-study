import styled from "styled-components";

export const AutoLogin = ({ autoLogin, setAutoLogin }) => {

    return (
        <Wrapper onClick={() => setAutoLogin(!autoLogin)}>
            <CheckIcon src={autoLogin ? require("../../img/icon_check.png") : require("../../img/icon_check_not.png")}></CheckIcon>
            <CheckTitle autoLogin={autoLogin}>자동로그인</CheckTitle>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
`

const CheckIcon = styled.img`
    width: 1rem;
    height: 1rem;
    margin-right: 0.3rem;
`

const CheckTitle = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${(props) => (props.autoLogin ? "white" : "#656565")}; 
`