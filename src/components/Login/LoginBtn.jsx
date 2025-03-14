import styled from "styled-components";
import { useLogin } from "../../hooks/LoginContext";

export const LoginBtn = () => {
    const { email, password, setIsModalOpen } = useLogin();

    const handleClick = () => {
        if (!email || !password) {
            return alert("이메일/비밀번호를 정확히 입력해주세요.");
        }
        setIsModalOpen(true);
    };

    return (
        <Wrapper>
            <LoginButton onClick={handleClick}>로그인하기</LoginButton>
        </Wrapper>
    );
};

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