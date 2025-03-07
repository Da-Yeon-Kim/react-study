import { styled } from 'styled-components';
import { useLogin } from '../../hooks/LoginContext';

export const LoginModal = () => {
    const { email, password, autoLogin, setIsModalOpen } = useLogin();
    const closeModal = () => setIsModalOpen(false);

    return (
        <Wrapper>
            <Modal>
                <Title>로그인 정보</Title>
                <Text>아이디 : {email} </Text>
                <Text>비밀번호 : {password}</Text>
                <Text>자동 로그인 : {autoLogin ? "y" : "n"}</Text>
                <CloseWrapper>
                    <CloseBtn onClick={closeModal}>닫기</CloseBtn>
                </CloseWrapper>
            </Modal>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    background-color: #232323b8;
`

const Modal = styled.div`
    color: #1d1d1d;
    background-color: #ffffff;
    width: 100%;
    max-width: 20rem;
    padding: 1.5rem;
    border-radius: 8px;
`

const Title = styled.h2`
`

const Text = styled.p`
    
`

const CloseWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const CloseBtn = styled.button`
    display: block;
    padding: 0.5rem 1.5rem;
    margin-top: 1rem;
    color: gray;
    font-size: 16px;
    background-color: #eeeeee;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`
